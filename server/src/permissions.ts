import type { Core } from '@strapi/strapi';

const permissions = [
  {
    section: 'plugins',
    displayName: 'Access the Audit Trail page',
    uid: 'access.plugin-page',
    pluginName: 'audit-trail',
    subCategory: 'general',
  },
  {
    section: 'plugins',
    displayName: 'Access the CMS Logins page',
    uid: 'access.logins-page',
    pluginName: 'audit-trail',
    subCategory: 'others',
  },
];

export async function setPermissions(strapi: Core.Strapi) {
  await strapi.service('admin::permission').actionProvider.registerMany(permissions);
}
