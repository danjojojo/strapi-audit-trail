import type { BaseQueryParams } from './audit-logs';

export interface GetAuditLoginsFilter {
  currentDateTime: string;
}

export interface GetAuditLogins {
  query: BaseQueryParams;
  filter: GetAuditLoginsFilter;
}
