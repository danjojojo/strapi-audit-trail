import { Core, Modules } from '@strapi/strapi';

export type Strapi = Core.Strapi;
export type Middleware = Modules.Documents.Middleware.Middleware;
export type Context = Parameters<Middleware>[0];
export type Next = Awaited<ReturnType<Parameters<Middleware>[1]>>;
