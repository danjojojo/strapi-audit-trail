import auditLogs from './audit-logs';

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
  ],
});
