import { audit } from './middlewares/audit';
import type { Core } from '@strapi/strapi';

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  // bootstrap phase
  // audit(strapi);
};

export default bootstrap;
