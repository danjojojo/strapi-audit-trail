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
