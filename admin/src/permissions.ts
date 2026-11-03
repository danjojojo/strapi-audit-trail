/// when used in useRBAC hook, the prefix is changed to canPluginPage, canLoginsPage
export const pluginPermissions = {
  accessPluginPage: [{ action: 'plugin::audit-trail.access.plugin-page', subject: null }],
  accessLoginsPage: [{ action: 'plugin::audit-trail.access.logins-page', subject: null }],
};
