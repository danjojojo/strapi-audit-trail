import type { Context } from 'koa';
import type { Core } from '@strapi/strapi';

const config = ({ strapi }: { strapi: Core.Strapi }) => ({
  async getConfig(ctx: Context) {
    ctx.body = await strapi.config.get('plugin::audit-trail');
  },
});

export default config;
