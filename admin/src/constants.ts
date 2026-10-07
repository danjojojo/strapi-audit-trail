// Default selected
export const RECENTS = {
  uid: 'recents',
  name: 'Recents',
  kind: 'none' as const,
};

// Other collections
export const OTHERS = [
  {
    uid: 'admin::session',
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

// Badge colors per action (see https://design-system.strapi.io/?path=/docs/foundations-color--docs)
export const ACTION_COLORS = {
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

// Landing page flex props
export const LANDING_PAGE_PROPS = {
  direction: 'column',
  gap: '40px',
  alignItems: 'flex-start',
  width: '100%',
  height: '100%',
  paddingTop: '40px',
  paddingLeft: '56px',
  paddingRight: '56px',
  paddingBottom: '40px',
};
