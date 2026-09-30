import { PLUGIN_ID } from './pluginId';
import { PluginIcon } from './components/PluginIcon';
import { Initializer } from './components/Initializer';
import { getTranslation } from './utils/getTranslation';
import { placeHeaderAction } from './utils/placeHeaderAction';
import { HeaderAction } from './components/actions/HeaderAction';
import type { AppPluginAPI } from './types/internal.types';
import type { StrapiApp } from '@strapi/strapi/admin';

const plugin: StrapiApp['appPlugins'][string] = {
  register(app) {
    const appApi = app.getPlugin('content-manager').apis as AppPluginAPI;

    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: 'Audit Trail',
      },
      Component: () => import('./pages/App'),
      permissions: [],
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: 'Audit Trail',
    });

    appApi.addDocumentAction((actions) =>
      placeHeaderAction({
        actions,
        component: [HeaderAction],
        placeBefore: 'delete',
      })
    );
  },

  registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = (await import(`./translations/${locale}.json`)) as {
            default: Record<string, string>;
          };

          const newData: Record<string, string> = {};
          const keys = Object.keys(data);

          for (const key of keys) {
            newData[getTranslation(key)] = data[key];
          }

          return { data: newData, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  },
};

export default plugin;
