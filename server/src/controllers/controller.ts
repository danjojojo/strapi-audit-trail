import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-audit-trail')
      // the name of the service file & the method.
      .service('service')
      .getWelcomeMessage();
  },

  getAllCollections(ctx: Context) {
    ctx.body = strapi.plugin('strapi-audit-trail').service('service').getAllCollections();
  },
});

export default controller;
