import { get } from 'lodash';
import type { Core, Struct } from '@strapi/strapi';

const collection = ({ strapi }: { strapi: Core.Strapi }) => ({
  getAllCollections() {
    const isVisible = (collection: Struct.ContentTypeSchema) =>
      get(collection, 'pluginOptions.content-manager.visible', true) === true &&
      get(collection, 'pluginOptions.content-type-builder.visible', true) === true;

    return Object.values(strapi.contentTypes)
      .filter(
        (collection: Struct.ContentTypeSchema) =>
          collection.uid.startsWith('api::') && isVisible(collection)
      )
      .map((collection: Struct.ContentTypeSchema) => ({
        uid: collection.uid,
        name: collection.info.displayName,
        kind: collection.kind,
      }));
  },
});

export default collection;
