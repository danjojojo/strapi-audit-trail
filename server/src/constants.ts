import type { AllowedParams } from './types/audit-logs';

/** Allowed params for the audit middleware method */
export const allowedParams: AllowedParams = {
  actions: ['create', 'delete', 'publish', 'unpublish', 'update', 'clone'],
};
