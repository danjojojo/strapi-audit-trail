import { Context } from './internal';

export interface BaseQueryParams {
  _q: string;
  sort: string;
  page: number;
  pageSize: number;
}

export interface AuditLogParams {
  action: string;
  createdAt: string;
}

export interface GetAuditLogsFilter {
  currentDateTime: string;
  collectionUid?: string;
  relatedDocumentId?: string;
}

export interface GetAuditLogs {
  query: BaseQueryParams;
  filter: GetAuditLogsFilter;
}

export interface AllowedParams {
  actions: Context['action'][];
}

export interface GetAuditLog {
  query: AuditLogParams;
  filter: GetAuditLogsFilter;
}
