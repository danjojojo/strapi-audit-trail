import type { Core } from '@strapi/strapi';
import type { Context } from 'koa';

const collection = ({ strapi }: { strapi: Core.Strapi }) => ({
  getAllCollections(ctx: Context) {
    ctx.body = strapi.plugin('audit-trail').service('collection').getAllCollections();
  },
});

export default collection;
