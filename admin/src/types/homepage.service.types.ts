import type { Struct } from '@strapi/strapi';

export interface CollectionData {
  uid: string;
  name: string;
  kind: Struct.ContentTypeSchema['kind'] | 'others' | 'none';
}

export interface AuditLogsData {
  id: number;
  documentId: string;
  action: string;
  collectionName: string;
  collectionUid: string;
  contentTypeKind: string;
  relatedDocumentId: string;
  actionFrom: string;
  createdAt: string;
}

export type GetAllCollectionsResponse = CollectionData[];
export type GetAuditLogsResponse = AuditLogsData[];
export type Columns = keyof AuditLogsData;
