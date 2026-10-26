import auditLogs from './audit-logs';
import auditLogins from './audit-logins';

export default () => ({
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/collections',
      handler: 'collection.getAllCollections',
      config: {
        policies: [],
      },
    },
    ...auditLogs.routes,
    ...auditLogins.routes,
  ],
});
