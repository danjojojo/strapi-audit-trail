import { get } from 'lodash';
import type { Core, Struct } from '@strapi/strapi';

const collection = ({ strapi }: { strapi: Core.Strapi }) => ({
  isVisibleCollection(collection: Struct.ContentTypeSchema) {
    return (
      get(collection, 'pluginOptions.content-manager.visible', true) === true &&
      get(collection, 'pluginOptions.content-type-builder.visible', true) === true
    );
  },
  getAllCollections() {
    return Object.values(strapi.contentTypes)
      .filter(
        (collection: Struct.ContentTypeSchema) =>
          collection.uid.startsWith('api::') && this.isVisibleCollection(collection)
      )
      .map((collection: Struct.ContentTypeSchema) => ({
        uid: collection.uid,
        name: collection.info.displayName,
        kind: collection.kind,
      }));
  },
  getVisibleCollections() {
    return Object.values(strapi.contentTypes)
      .filter(
        (collection: Struct.ContentTypeSchema) =>
          collection.uid.startsWith('api::') && this.isVisibleCollection(collection)
      )
      .map((collection: Struct.ContentTypeSchema) => collection.uid);
  },
});

export default collection;
