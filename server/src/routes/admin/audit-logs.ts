export default {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/audit-logs/:collectionUid?',
      handler: 'auditLogs.getAuditLogs',
      config: {
        policies: [],
      },
    },
    {
      method: 'GET',
      path: '/audit-logs/:collectionUid/:relatedDocumentId?',
      handler: 'auditLogs.getAuditLog',
      config: {
        policies: [],
      },
    },
  ],
};
