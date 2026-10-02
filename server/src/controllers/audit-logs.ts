import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';

const auditLogs = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getAuditLogs(ctx: Context) {
    const { collectionUid, relatedDocumentId } = ctx.params;
    const { _q, sort, page, pageSize } = ctx.request.query;

    const currentDateTime = new Date().toISOString();
    const safePage = Math.max(Number(page) || 1, 1);
    const safePageSize = Math.min(Number(pageSize) || 10, 100);

    ctx.body = await strapi
      .plugin('audit-trail')
      .service('auditLogs')
      .getAuditLogs({
        query: {
          _q,
          sort,
          page: safePage,
          pageSize: safePageSize,
        },
        filter: {
          currentDateTime,
          collectionUid,
          relatedDocumentId,
        },
      });
  },
});

export default auditLogs;
