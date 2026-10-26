export default {
  type: 'admin',
  routes: [
    {
      method: 'GET',
      path: '/audit-logins',
      handler: 'auditLogins.getAuditLogins',
      config: {
        policies: [],
      },
    },
  ],
};
