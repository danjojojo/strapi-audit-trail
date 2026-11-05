import {
  getPayload,
  getDocument,
  isBulkDelete,
  getDeepPopulate,
  getBulkDeleteCalls,
  collectComponentNames,
  collectComponentSchemas,
} from './helpers';
import {
  DAY_IN_MS,
  allowedParams,
  RETENTION_DAYS,
  excludeCollection,
  supersededActions,
} from '../../constants';
import { Strapi, Context, UnawaitedNext } from './../../types/internal';

const recordAction = async (ctx: Context, next: UnawaitedNext) => {
  const context = strapi.requestContext.get();
  const ctxUser = context?.state?.user;

  const user = {
    id: ctxUser?.id ?? null,
    documentId: ctxUser?.documentId ?? null,
    firstname: ctxUser?.firstname ?? null,
    lastname: ctxUser?.lastname ?? null,
    username: ctxUser?.username ?? null,
    email: ctxUser?.email ?? 'system process',
  };

  const populate = getDeepPopulate(ctx.uid);
  (ctx.params as any).populate = populate;

  const documentBeforeDelete = await getDocument({
    ctx,
    populate,
  });

  const dataPayload = await next();

  const layout = await strapi
    .plugin('content-manager')
    .service('content-types')
    .findConfiguration(strapi.contentType(ctx.uid));

  const componentsLayout = await strapi
    .plugin('content-manager')
    .service('content-types')
    .findComponentsConfigurations(strapi.contentType(ctx.uid));

  const componentsNames = collectComponentNames(ctx.uid, {});
  const componentsSchema = collectComponentSchemas(ctx.uid, {});

  const payloadToSave = documentBeforeDelete ?? getPayload(dataPayload);

  await strapi.documents('plugin::audit-trail.audit-log').create({
    data: {
      action: ctx.action,
      collectionName: ctx.contentType.info.displayName,
      collectionUid: ctx.uid,
      contentTypeKind: ctx.contentType.kind === 'singleType' ? 'single-types' : 'collection-types',
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
};

export const auditLogs = async (strapi: Strapi) => {
  strapi.documents.use(async (ctx: Context, next) => {
    if (excludeCollection.includes(ctx.uid) || !allowedParams.actions.includes(ctx.action)) {
      return await next();
    }

    const context = strapi.requestContext.get();

    if (
      supersededActions.includes(ctx.action) &&
      context.request.url.split('?')[0].endsWith('/actions/publish')
    ) {
      return await next();
    }

    if (isBulkDelete(ctx, context.request.url)) {
      const calls = getBulkDeleteCalls(context.state);
      const documentId = (ctx.params as any)?.documentId;
      const existingCall = calls.get(documentId);

      if (existingCall) {
        return await existingCall;
      }

      const call = recordAction(ctx, next);
      calls.set(documentId, call);
      return await call;
    }

    return await recordAction(ctx, next);
  });
};
