import { services } from '../services';
import { useRouting } from './useRouting';
import { useState, useEffect } from 'react';
import { useRBAC } from '@strapi/strapi/admin';
import { OTHERS, RECENTS } from '../constants';
import { pluginPermissions } from '../permissions';
import { appendCollectionPath } from '../utils/routing';
import { useConfigContext } from '../providers/config.provider';
import type { CollectionData } from '../types/service.types';

export function useCollections() {
  const { config, isConfigLoading } = useConfigContext();
  const { isLoading, allowedActions } = useRBAC(pluginPermissions);
  const { collectionKind, collectionUid, overrideNavigate } = useRouting();
  const { getAllCollections } = services();

  const [targetCollection, setTargetCollection] = useState<string>('');
  const [allCollections, setAllCollections] = useState<CollectionData[]>([]);
  const [filteredCollections, setFilteredCollections] = useState<CollectionData[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<CollectionData | null>(null);
  const [isInvalidCollection, setIsInvalidCollection] = useState<boolean>(false);
  const [isCollectionLoading, setIsCollectionLoading] = useState<boolean>(true);
  const [areCollectionsFetched, setAreCollectionsFetched] = useState<boolean>(false);

  const fetchCollections = async () => {
    try {
      const data = await getAllCollections();
      if (data) {
        const allData = [...data];

        if (config?.enableAuditLogins) {
          allData.push(...OTHERS);
        }

        setAllCollections(allData);
        setFilteredCollections(allData);
      }
    } finally {
      setAreCollectionsFetched(true);
    }
  };

  const selectCollection = (collection: CollectionData) => {
    setSelectedCollection(collection);
    overrideNavigate(appendCollectionPath(collection));
  };

  const filterCollection = (keyword: string) => {
    if (!keyword) setFilteredCollections(allCollections);

    setTargetCollection(keyword);

    setFilteredCollections(
      allCollections.filter((collection) =>
        collection.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  useEffect(() => {
    if (isConfigLoading) return;
    fetchCollections();
  }, [isConfigLoading, config]);

  useEffect(() => {
    if (isConfigLoading || !areCollectionsFetched) {
      setIsCollectionLoading(true);
      setIsInvalidCollection(false);
      return;
    }

    setIsInvalidCollection(false);

    if (!collectionUid && collectionKind === '') {
      /** Navigate to Recents */
      setSelectedCollection(RECENTS);
      setIsCollectionLoading(false);
      return;
    }

    const matched = allCollections.find((collection) => collection.uid === collectionUid);

    if (matched) {
      /** Just set the collection as selected to make the list item active */
      setSelectedCollection(matched);
    } else {
      setIsInvalidCollection(true);
    }

    setIsCollectionLoading(false);
  }, [collectionKind, collectionUid, allCollections, isConfigLoading, areCollectionsFetched]);

  const getOtherCollections = () => {
    if (!isLoading && allowedActions.canLoginsPage) {
      return filteredCollections.filter((c) => c.kind === 'others' && c.uid === 'cms-logins');
    }

    return [];
  };

  return {
    /** STATES */
    targetCollection,
    selectedCollection,
    isInvalidCollection,
    isCollectionLoading,
    collectionTypes: filteredCollections.filter((c) => c.kind === 'collectionType'),
    singleTypes: filteredCollections.filter((c) => c.kind === 'singleType'),
    otherCollections: getOtherCollections(),

    /** METHODS */
    selectCollection,
    filterCollection,
  };
}
