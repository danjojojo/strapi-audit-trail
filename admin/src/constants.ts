import type { BadgeColors } from "./types/ui.types";

// Default selected
export const RECENTS = {
  uid: 'recents',
  name: 'Recents',
  kind: 'none' as const,
};

// Other collections
export const OTHERS = [
  {
    uid: 'admin::login.login',
    name: 'CMS Logins',
    kind: 'others' as const,
  },
];

// Default Message for the EmptyState
export const EMPTY_STATE = {
  content:
    'Activities for this collection were not yet recorded. Create, update, delete, or publish an entry from this collection to record an activity.',
  action: {
    label: 'Go back to content manager',
  },
};

// Hidden columns in the table
export const HIDDEN_COLUMNS = ['id', 'documentId'];

// Badge colors (see https://design-system.strapi.io/?path=/docs/foundations-color--docs)
export const ACTION_COLORS: BadgeColors = {
  create: {
    backgroundColor: 'primary100',
    textColor: 'primary500',
  },
  publish: {
    backgroundColor: 'success100',
    textColor: 'success500',
  },
  update: {
    backgroundColor: 'alternative100',
    textColor: 'alternative600',
  },
  clone: {
    backgroundColor: 'alternative100',
    textColor: 'secondary500',
  },
  delete: {
    backgroundColor: 'danger100',
    textColor: 'danger500',
  },
  unpublish: {
    backgroundColor: 'danger100',
    textColor: 'danger500',
  },
  discardDraft: {
    backgroundColor: 'warning100',
    textColor: 'warning500',
  },
};

// ERROR MESSAGES
export const ERROR = {
  VERSION: {
    INVALID_DETAIL:
      'This version request is invalid. To access actual versions, select any entry from Recents or from any content type in the sidebar, or you may click Content History at the top-right menu options when you visit an entry inside Content Manager.',
    ERROR_DETAIL:
      'Experienced an error while fetching this version. Please try again and refresh this page.',
    EMPTY_DETAIL:
      'Versions for this document were not yet recorded. Make updates with this entry to record a version.',
    INVALID_LISTING:
      'We cannot find versions for this document as this version request is invalid.',
    ERROR_LISTING:
      'Experienced an error while fetching the versions. Please try again and refresh this page.',
  },
  CONTENT_TYPE: {
    INVALID:
      'This content type requst is invalid. Please select an available content type from the sidebar.',
    ERROR_ANY:
      'Experienced an error while fetching the audit logs for this content type. Please try again, and refresh this page.',
    ERROR_RECENTS:
      'Experienced an error while fetching the most recent audit logs. Please try again, and refresh this page.',
  },
  BASE: {
    INVALID: 'This request is invalid. Please select an available content type from the sidebar.',
    ERROR: 'Experienced an error while fetching data. Please try again, and refresh this page.',
  },
};

// Audit Logins: Badge colors per result (see https://design-system.strapi.io/?path=/docs/foundations-color--docs)
export const LOGIN_RESULT_COLORS: BadgeColors = {
  success: {
    backgroundColor: 'success100',
    textColor: 'success500',
  },
  failed: {
    backgroundColor: 'danger100',
    textColor: 'danger500',
  },
};
