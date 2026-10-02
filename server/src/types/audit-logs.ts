import { Context } from './internal';

export interface BaseQueryParams {
  _q: string;
  sort: string;
  page: number;
  pageSize: number;
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
