import type {
  ContentManagerPlugin,
  DocumentActionComponent,
  DocumentActionDescription,
  EditViewContext,
} from '@strapi/content-manager/strapi-admin';

export type AppPluginAPI = ContentManagerPlugin['config']['apis'];
export type ActionContext = EditViewContext;
export type ActionComponent = DocumentActionComponent;
export type ActionDescription = DocumentActionDescription;
