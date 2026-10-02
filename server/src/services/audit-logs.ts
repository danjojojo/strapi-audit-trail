import type { Core } from '@strapi/strapi';
import type { GetAuditLogs } from '../types/audit-logs';

const auditLogs = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getAuditLogs({ query, filter }: GetAuditLogs) {
    const data = await strapi.documents('plugin::audit-trail.audit-log').findMany({
      _q: query._q,
      sort: query.sort,
      pagination: {
        page: query.page,
        pageSize: query.pageSize,
      },
      filters: {
        retentionUntil: {
          $gte: filter.currentDateTime,
        },
        ...(filter.collectionUid && {
          collectionUid: {
            $eqi: filter.collectionUid,
          },
        }),
        ...(filter.relatedDocumentId && {
          relatedDocumentId: {
            $eqi: filter.relatedDocumentId,
          },
        }),
      },
      fields: ['action', 'collectionName', 'relatedDocumentId'],
    });
    return data;
  },
});

export default auditLogs;
