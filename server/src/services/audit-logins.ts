import type { Core } from '@strapi/strapi';
import type { GetAuditLogins } from 'src/types/audit-logins';

const auditLogins = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getAuditLogins({ filter, query }: GetAuditLogins) {
    const data = await strapi.documents('plugin::audit-trail.audit-login').findMany({
      _q: query._q,
      sort: query.sort ?? 'createdAt:DESC',
      start: (query.page - 1) * query.pageSize,
      limit: query.pageSize,
      filters: {
        retentionUntil: {
          $gte: filter.currentDateTime,
        },
      },
      fields: [
        'emailAddress',
        'loginResult',
        'requestTime',
        'userDetails',
        'userClient',
        'ipAddress',
        'loginErrorReason',
      ],
    });

    const total = await strapi.documents('plugin::audit-trail.audit-login').count({
      _q: query._q,
      filters: {
        retentionUntil: {
          $gte: filter.currentDateTime,
        },
      },
    });

    const payloadToReturn = {
      data,
      meta: {
        page: query.page,
        pageSize: query.pageSize,
        pageCount: Math.max(Math.ceil(total / query.pageSize), 1),
        total,
      },
    };

    return payloadToReturn;
  },
});

export default auditLogins;
