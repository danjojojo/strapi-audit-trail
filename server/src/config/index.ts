export default {
  default: {
    enableAuditLogins: false,
  },
  validator: (config: { enableAuditLogins: unknown }) => {
    if (typeof config.enableAuditLogins !== 'boolean') {
      throw new Error('"enableAuditLogins" must be a boolean');
    }
  },
};
