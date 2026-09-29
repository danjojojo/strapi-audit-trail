import { PLUGIN_ID } from '../pluginId';
import { useFetchClient } from '@strapi/strapi/admin';
import type { GetAllCollectionsResponse } from '../types/homepage.service.types';

export function homepageService() {
  const { get } = useFetchClient();

  async function getAllCollections() {
    try {
      const res = await get(`/${PLUGIN_ID}/collections`);
      return res.data as GetAllCollectionsResponse;
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getAllCollections,
  };
}
