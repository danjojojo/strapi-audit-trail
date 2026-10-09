import { ACTION_COLORS } from '../constants';
import type { Struct } from '@strapi/strapi';

export interface CollectionData {
  uid: string;
  name: string;
  kind: Struct.ContentTypeSchema['kind'] | 'others' | 'none';
}

export type Columns = keyof AuditLogsData;

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface AuditLogsData {
  id: number;
  documentId: string;
  action: keyof typeof ACTION_COLORS;
  collectionName: string;
  collectionUid: string;
  contentTypeKind: string;
  relatedDocumentId: string;
  actionFrom: string;
  createdAt: string;
}

export interface AuditLogData {
  id: number;
  documentId: string;
  action: keyof typeof ACTION_COLORS;
  collectionName: string;
  collectionUid: string;
  contentTypeKind: string;
  relatedDocumentId: string;
  actionFrom: string;
  createdAt: string;
  payload: string;
  schema: string;
  layout: string;
}

// METHODS

export interface GetAuditLogs {
  collectionUid?: string;
  query?: {
    _q?: string;
    sort?: string;
    page?: number;
    pageSize?: number;
  };
}

export interface GetAuditLog {
  collectionUid?: string;
  documentId?: string;
  query?: {
    action?: string;
    createdAt?: string;
  };
}

// RESPONSES

export type GetAllCollectionsResponse = CollectionData[];

export interface GetAuditLogsResponse {
  data: AuditLogsData[];
  meta: Pagination;
}

export interface GetAuditLogResponse {
  auditLog: AuditLogData;
  relatedLogs: AuditLogsData[];
}
