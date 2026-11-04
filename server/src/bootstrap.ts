import { setPermissions } from './permissions';
import { auditLogs } from './middlewares/audit-logs';
import { auditLogins } from './middlewares/audit-logins';
import type { Core } from '@strapi/strapi';

const bootstrap = async ({ strapi }: { strapi: Core.Strapi }) => {
  // set permissions
  await setPermissions(strapi);

  // middlewares
  auditLogs(strapi);
  auditLogins(strapi);
};

export default bootstrap;
