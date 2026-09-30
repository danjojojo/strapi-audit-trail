import { CollectionData } from 'src/types/homepage.service.types';
import { PLUGIN_ID } from '../pluginId';

const basePath = `/admin/plugins/${PLUGIN_ID}`;

export const appendToBasePath = (url: string): string => {
  return `${basePath}/${url}`;
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
    case 'none':
    default:
      url = `/${collection.uid}`;
      break;
  }

  return `${basePath}${url}`;
};

export const stripPath = (url: string): string => {
  // use this for useNavigate, removes the /admin at the start
  return url.slice(6, url.length);
};
