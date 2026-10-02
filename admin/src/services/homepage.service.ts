import { PLUGIN_ID } from '../pluginId';
import { useFetchClient } from '@strapi/strapi/admin';
import type { GetAllCollectionsResponse } from '../types/homepage.service.types';

export function homepageService() {
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

    async getAuditLogs(collectionUid?: string, documentId?: string) {
      try {
        const paths = [`${PLUGIN_ID}`, 'audit-logs'];
        if (collectionUid) paths.push(collectionUid);
        if (collectionUid && documentId) paths.push(collectionUid, documentId);

        const res = await get(`/${paths.join('/')}`);
        console.log('res: ', JSON.stringify(res, null, 2));
        return res;
      } catch (error) {
        console.error(error);
      }
    },
  };
}
