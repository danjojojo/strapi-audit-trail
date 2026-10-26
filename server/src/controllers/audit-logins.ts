import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';

const auditLogins = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getAuditLogins(ctx: Context) {
    const { _q, sort, page, pageSize } = ctx.request.query;

    const currentDateTime = new Date().toISOString();
    const safePage = Math.max(Number(page) || 1, 1);
    const safePageSize = Math.min(Number(pageSize) || 10, 100);

    ctx.body = await strapi
      .plugin('audit-trail')
      .service('auditLogins')
      .getAuditLogins({
        query: {
          _q,
          sort,
          page: safePage,
          pageSize: safePageSize,
        },
        filter: {
          currentDateTime,
        },
      });
  },
});

export default auditLogins;
