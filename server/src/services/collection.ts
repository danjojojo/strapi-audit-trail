import type { Core, Struct } from '@strapi/strapi';

const collection = ({ strapi }: { strapi: Core.Strapi }) => ({
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

export default collection;
