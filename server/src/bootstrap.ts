import { auditLogs } from './middlewares/audit-logs';
import { auditLogins } from './middlewares/audit-logins';
import type { Core } from '@strapi/strapi';

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  // bootstrap phase
  auditLogs(strapi);
  auditLogins(strapi);
};

export default bootstrap;
