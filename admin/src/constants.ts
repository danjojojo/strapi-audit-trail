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
    name: 'Login Sessions',
    kind: 'others' as const,
  },
  // {
  //   uid: 'plugin::upload.file',
  //   name: 'Media Uploads',
  //   kind: 'others' as const,
  // },
];

// Default Message for the EmptyState
export const EMPTY_STATE = {
  content:
    'Activities for this collection were not yet recorded. Create, update, delete, or publish an entry from this collection to record an activity.',
  action: {
    label: 'Go back to content manager',
  },
};
