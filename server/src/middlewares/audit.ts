import { Strapi, Context } from '../types/internal';

export const audit = async (strapi: Strapi) => {
  strapi.documents.use(async (ctx: Context, next) => {
    const data = await next();

    console.log('ctx: ', JSON.stringify(ctx, null, 2));
    console.log('data: ', JSON.stringify(data, null, 2));

    return data;
  });
};
