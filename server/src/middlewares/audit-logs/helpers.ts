import { BULK_DELETE_CALLS_KEY } from './../../constants';
import type { GetDocumentParams } from './../../types/audit-logs';
import type { Context, Next, FieldUid } from './../../types/internal';

export const getDeepPopulate = (uid: FieldUid): Record<string, any> => {
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

export const isBulkDelete = (ctx: Context, requestUrl?: string) =>
  ctx.action === 'delete' && !!requestUrl?.split('?')[0].endsWith('/actions/bulkDelete');

export const getBulkDeleteCalls = (requestState: Record<string, any>): Map<string, Promise<any>> =>
  (requestState[BULK_DELETE_CALLS_KEY] ??= new Map<string, Promise<any>>());

export const getDocument = async ({ ctx, populate }: GetDocumentParams) => {
  if (!(ctx.params as any)?.documentId || ctx.action !== 'delete') {
    return null;
  }
  const documentId = (ctx.params as any)?.documentId;
  const apiUid = ctx.uid;
  const locale = ctx.params?.locale;

  const base = {
    documentId,
    populate,
    ...(locale && locale !== '*'
      ? {
          locale,
        }
      : {}),
  };

  const findDocument = async (status: 'draft' | 'published') => {
    return await strapi.documents(apiUid).findOne({
      ...base,
      status,
    });
  };

  try {
    return (await findDocument('published')) ?? (await findDocument('draft')) ?? null;
  } catch {
    return null;
  }
};

export const collectComponentNames = (uid: FieldUid, acc: Record<string, any> = {}) => {
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

export const collectComponentSchemas = (uid: FieldUid, acc: Record<string, any> = {}) => {
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

export function getPayload(dataPayload: Next) {
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
