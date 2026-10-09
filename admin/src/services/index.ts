import { PLUGIN_ID } from '../pluginId';
import { useFetchClient } from '@strapi/strapi/admin';
import type {
  GetAllCollectionsResponse,
  GetAuditLogsResponse,
  GetAuditLogs,
  GetAuditLogResponse,
  GetAuditLog,
} from '../types/service.types';

export function services() {
  const { get } = useFetchClient();

  return {
    async getAllCollections() {
      try {
        const res = await get(`/${PLUGIN_ID}/collections`);
        return res.data as GetAllCollectionsResponse;
      } catch (error) {
        console.error(error);
      }
    },

    async getAuditLogs({ collectionUid, query }: GetAuditLogs) {
      try {
        const paths = [`${PLUGIN_ID}`, 'audit-logs'];
        if (collectionUid) paths.push(collectionUid);

        const res = await get(`/${paths.join('/')}`, { params: query });
        return res.data as GetAuditLogsResponse;
      } catch (error) {
        console.error(error);
      }
    },

    async getAuditLog({ collectionUid, documentId, query }: GetAuditLog) {
      try {
        const paths = [`${PLUGIN_ID}`, 'audit-logs'];
        if (collectionUid) paths.push(collectionUid);
        if (collectionUid && documentId) paths.push(documentId);

        const res = await get(`/${paths.join('/')}`, { params: query });
        return res.data as GetAuditLogResponse;
      } catch (error) {
        console.error(error);
      }
    },
  };
}
