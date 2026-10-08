import { PLUGIN_ID } from '../pluginId';
import { CollectionData } from '../types/homepage.service.types';

const contentManagerPath = `/admin/content-manager`;
const pluginBasePath = `/admin/plugins/${PLUGIN_ID}`;

export const appendToContentManagerPath = (url: string): string => {
  return `${contentManagerPath}/${url}`;
};

export const appendToPluginPath = (url: string): string => {
  return `${pluginBasePath}${url ? `/${url}` : ''}`;
};

export const appendCollectionPath = (collection: CollectionData): string => {
  let url: string = '';
  switch (collection.kind) {
    case 'collectionType':
      url = `/collection-types/${collection.uid}`;
      break;
    case 'singleType':
      url = `/single-types/${collection.uid}`;
      break;
    case 'others':
      url = `/others/${collection.uid}`;
      break;
    case 'none':
    default:
      url = `/${collection.uid}`;
      break;
  }

  return `${pluginBasePath}${url}`;
};

export const stripPath = (url: string): string => {
  // use this for useNavigate, removes the /admin at the start
  return url.slice(6, url.length);
};
