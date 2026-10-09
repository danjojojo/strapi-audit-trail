import type { Core } from '@strapi/strapi';
import type { GetAuditLog, GetAuditLogs } from '../types/audit-logs';

const auditLogs = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getAuditLogs({ query, filter }: GetAuditLogs) {
    const data = await strapi.documents('plugin::audit-trail.audit-log').findMany({
      _q: query._q,
      sort: query.sort ?? 'createdAt:DESC',
      start: (query.page - 1) * query.pageSize,
      limit: query.pageSize,
      filters: {
        retentionUntil: {
          $gte: filter.currentDateTime,
        },
        ...(filter.collectionUid && {
          collectionUid: {
            $eqi: filter.collectionUid,
          },
        }),
      },
      fields: [
        'action',
        'collectionName',
        'collectionUid',
        'contentTypeKind',
        'relatedDocumentId',
        'actionFrom',
        'createdAt',
      ],
    });

    const total = await strapi.documents('plugin::audit-trail.audit-log').count({
      _q: query._q,
      filters: {
        retentionUntil: {
          $gte: filter.currentDateTime,
        },
        ...(filter.collectionUid && {
          collectionUid: {
            $eqi: filter.collectionUid,
          },
        }),
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
  async getAuditLog({ query, filter }: GetAuditLog) {
    const auditLog = await strapi.documents('plugin::audit-trail.audit-log').findFirst({
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
        ...(query.action && {
          action: {
            $eqi: query.action,
          },
        }),
        ...(query.createdAt && {
          createdAt: {
            $eq: query.createdAt,
          },
        }),
      },
      fields: [
        'action',
        'collectionName',
        'collectionUid',
        'contentTypeKind',
        'relatedDocumentId',
        'actionFrom',
        'createdAt',
        'payload',
        'documentSchema',
        'documentLayout',
        'componentsSchema',
        'componentsLayout',
      ],
    });

    const relatedLogs = await strapi.documents('plugin::audit-trail.audit-log').findMany({
      sort: 'createdAt:DESC',
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
      fields: [
        'action',
        'collectionName',
        'collectionUid',
        'contentTypeKind',
        'relatedDocumentId',
        'actionFrom',
        'createdAt',
      ],
    });

    return {
      auditLog,
      relatedLogs,
    };
  },
});

export default auditLogs;
