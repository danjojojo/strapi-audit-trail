import { allowedParams } from '../constants';
import { Strapi, Context, Next, FieldUid } from './../types/internal';

const RETENTION_DAYS = 30;
const DAY_IN_MS = 24 * 60 * 60 * 1000;

const getDeepPopulate = (uid: FieldUid): Record<string, any> => {
  const model = strapi.getModel(uid);
  const attributes = Object.entries(model.attributes);

  return attributes.reduce<Record<string, any>>((acc, [attributeName, attribute]) => {
    switch (attribute.type) {
      case 'relation': {
        acc[attributeName] = true;
        break;
      }
      case 'media': {
        acc[attributeName] = true;
        break;
      }
      case 'component': {
        acc[attributeName] = {
          populate: getDeepPopulate(attribute.component),
        };
        break;
      }
      case 'dynamiczone': {
        const components: string[] = attribute.components || [];
        const populatedComponents = components.reduce<Record<string, any>>((acc, componentUID) => {
          acc[componentUID] = {
            populate: getDeepPopulate(componentUID as Context['uid']),
          };
          return acc;
        }, {});
        acc[attributeName] = { on: populatedComponents };
        break;
      }
      default:
        break;
    }
    return acc;
  }, {});
};

const excludeCollection: Context['uid'][] = [
  'plugin::audit-trail.audit-log',
  'plugin::audit-trail.audit-login',
];

export const auditLogs = async (strapi: Strapi) => {
  strapi.documents.use(async (ctx: Context, next) => {
    if (!excludeCollection.includes(ctx.uid) && allowedParams.actions.includes(ctx.action)) {
      const context = strapi.requestContext.get();
      const ctxUser = context?.state.user;

      const user = {
        id: ctxUser.id,
        documentId: ctxUser.documentId,
        firstname: ctxUser.firstname,
        lastname: ctxUser.lastname,
        username: ctxUser.username ?? null,
        email: ctxUser.email,
      };

      (ctx.params as any).populate = getDeepPopulate(ctx.uid);

      const dataPayload = await next();

      function getPayload(dataPayload: Next) {
        if (!dataPayload) return null;

        if (typeof dataPayload === 'number') {
          return null;
        }

        if (Array.isArray(dataPayload)) {
          return dataPayload[0];
        }

        if (typeof dataPayload === 'object' && 'entries' in dataPayload) {
          return dataPayload.entries[0];
        }

        return dataPayload;
      }

      const layout = await strapi
        .plugin('content-manager')
        .service('content-types')
        .findConfiguration(strapi.contentType(ctx.uid));

      const componentsLayout = await strapi
        .plugin('content-manager')
        .service('content-types')
        .findComponentsConfigurations(strapi.contentType(ctx.uid));

      const collectComponentSchemas = (uid: FieldUid, acc: Record<string, any> = {}) => {
        const model = strapi.getModel(uid);

        Object.values(model.attributes).forEach((attribute) => {
          if (attribute.type === 'component' && !acc[attribute.component]) {
            const data = strapi.getModel(attribute.component);
            acc[attribute.component] = data.attributes;
            collectComponentSchemas(attribute.component, acc);
          }
          if (attribute.type === 'dynamiczone') {
            (attribute.components || []).forEach((componentUID: FieldUid) => {
              if (!acc[componentUID]) {
                const data = strapi.getModel(componentUID);
                acc[componentUID] = data.attributes;
                collectComponentSchemas(componentUID, acc);
              }
            });
          }
        });

        return acc;
      };

      const collectComponentNames = (uid: FieldUid, acc: Record<string, any> = {}) => {
        const model = strapi.getModel(uid);

        Object.values(model.attributes).forEach((attribute) => {
          if (attribute.type === 'dynamiczone') {
            (attribute.components || []).forEach((componentUID: FieldUid) => {
              if (!acc[componentUID]) {
                const data = strapi.getModel(componentUID);
                acc[componentUID] = data.info.displayName;
              }
            });
          }
        });

        return acc;
      };

      const componentsNames = collectComponentNames(ctx.uid, {});

      const componentsSchema = collectComponentSchemas(ctx.uid, {});

      const payloadToSave = getPayload(dataPayload);

      await strapi.documents('plugin::audit-trail.audit-log').create({
        data: {
          action: ctx.action,
          collectionName: ctx.contentType.info.displayName,
          collectionUid: ctx.uid,
          contentTypeKind:
            ctx.contentType.kind === 'singleType' ? 'single-types' : 'collection-types',
          relatedDocumentId: payloadToSave?.documentId,
          localization: payloadToSave?.locale ?? '',
          payload: JSON.stringify(
            {
              ...payloadToSave,
              createdBy: user,
              updatedBy: user,
            },
            null,
            2
          ),
          documentSchema: JSON.stringify(ctx.contentType.attributes, null, 2),
          documentLayout: JSON.stringify(layout, null, 2),
          componentsSchema: JSON.stringify(componentsSchema, null, 2),
          componentsLayout: JSON.stringify(componentsLayout, null, 2),
          componentsNames: JSON.stringify(componentsNames, null, 2),
          actionFrom: JSON.stringify(user, null, 2),
          retentionUntil: new Date(Date.now() + RETENTION_DAYS * DAY_IN_MS).toISOString(),
        },
      });
      return dataPayload;
    } else {
      const data = await next();
      return data;
    }
  });
};
