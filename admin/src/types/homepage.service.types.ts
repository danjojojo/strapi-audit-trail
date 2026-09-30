import type { Struct } from '@strapi/strapi';

export interface CollectionData {
  uid: string;
  name: string;
  kind: Struct.ContentTypeSchema['kind'] | 'none';
}

export type GetAllCollectionsResponse = CollectionData[];
