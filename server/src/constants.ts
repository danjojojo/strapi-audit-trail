import type { Context } from './types/internal';

/** Allowed params for the audit middleware method */
export const allowedParams = (() => {
  const actions: Context['action'][] = [
    'create',
    'delete',
    'publish',
    'unpublish',
    'update',
    'clone',
    'discardDraft',
  ];

  return {
    actions,
  };
})();

export const excludeCollection: Context['uid'][] = [
  'plugin::audit-trail.audit-log',
  'plugin::audit-trail.audit-login',
];

export const supersededActions: Context['action'][] = ['clone', 'create', 'update'];

export const RETENTION_DAYS = 30;
export const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const BULK_DELETE_CALLS_KEY = 'auditTrailBulkDeleteCalls';