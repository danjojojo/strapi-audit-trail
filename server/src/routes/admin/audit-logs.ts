export default {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/audit-logs/:collectionUid?/:relatedDocumentId?',
      handler: 'auditLogs.getAuditLogs',
      config: {
        policies: [],
      },
    },
  ],
};
