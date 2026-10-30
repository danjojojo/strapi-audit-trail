import { Strapi } from '../types/internal';
import { parseUserAgent } from '@strapi/utils';

const RETENTION_DAYS = 30;
const DAY_IN_MS = 24 * 60 * 60 * 1000;

export const auditLogins = async (strapi: Strapi) => {
  strapi.eventHub.on('admin.auth.success', async (data) => {
    const context = strapi.requestContext.get();
    const userAgent = context?.request?.header['user-agent'];
    const { deviceName } = parseUserAgent(userAgent);

    const user = {
      id: data.user.id,
      documentId: data.user.documentId,
      firstname: data.user.firstname,
      lastname: data.user.lastname,
      username: data.user.username ?? null,
      email: data.user.email,
    };

    await strapi.documents('plugin::audit-trail.audit-login').create({
      data: {
        emailAddress: data.user.email,
        loginResult: 'success',
        requestTime: new Date(Date.now()).toISOString(),
        userDetails: JSON.stringify(user, null, 2),
        userClient: deviceName,
        ipAddress: context?.ip,
        loginErrorReason: 'none',
        retentionUntil: new Date(Date.now() + RETENTION_DAYS * DAY_IN_MS).toISOString(),
      },
    });
  });

  strapi.eventHub.on('admin.auth.error', async (data) => {
    try {
      const context = strapi.requestContext.get();
      const userAgent = context?.request?.header['user-agent'];
      const { deviceName } = parseUserAgent(userAgent);

      const attemptedEmail = data.user?.email ?? context?.request?.body?.email ?? 'unknown';

      await strapi.documents('plugin::audit-trail.audit-login').create({
        data: {
          emailAddress: String(attemptedEmail).toLowerCase(),
          loginResult: 'failed',
          requestTime: new Date(Date.now()).toISOString(),
          userDetails: data.user ? JSON.stringify(data.user, null, 2) : 'N/A (no matching account)',
          userClient: deviceName,
          ipAddress: context?.ip,
          loginErrorReason: data.reason,
          retentionUntil: new Date(Date.now() + RETENTION_DAYS * DAY_IN_MS).toISOString(),
        },
      });
    } catch (error) {
      strapi.log.error(`Failed to record failed login audit: ${error}`);
    }
  });
};
