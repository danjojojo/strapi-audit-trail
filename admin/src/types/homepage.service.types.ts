import type { Struct } from '@strapi/strapi';

export interface CollectionData {
  uid: string;
  name: string;
  kind: Struct.ContentTypeSchema['kind'] | 'others' | 'none';
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
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

export interface GetAuditLogsResponse {
  data: AuditLogsData[];
  meta: Pagination;
}

export type Columns = keyof AuditLogsData;

export interface GetAuditLogs {
  collectionUid?: string;
  documentId?: string;
  query?: {
    _q?: string;
    sort?: string;
    page?: number;
    pageSize?: number;
  };
}
