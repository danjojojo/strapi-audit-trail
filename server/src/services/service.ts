import type { Core, Struct } from '@strapi/strapi';

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },

  getAllCollections() {
    return Object.values(strapi.contentTypes)
      .filter((collection: Struct.ContentTypeSchema) => collection.uid.startsWith('api::'))
      .map((collection: Struct.ContentTypeSchema) => ({
        uid: collection.uid,
        name: collection.info.displayName,
        kind: collection.kind,
      }));
  },
});

export default service;
