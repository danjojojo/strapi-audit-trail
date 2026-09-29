import type { Core, Struct } from '@strapi/strapi';

const service = ({ strapi }: { strapi: Core.Strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },

  getAllCollections() {
    return Object.values(strapi.contentTypes)
      .filter(
        (collection: Struct.CollectionTypeSchema) =>
          collection.kind === 'collectionType' && collection.uid.startsWith('api::')
      )
      .map((collection: Struct.CollectionTypeSchema) => ({
        uid: collection.uid,
        name: collection.info.displayName,
      }));
  },
});

export default service;
