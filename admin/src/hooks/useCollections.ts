import { services } from '../services';
import { useRouting } from './useRouting';
import { useState, useEffect } from 'react';
import { useRBAC } from '@strapi/strapi/admin';
import { OTHERS, RECENTS } from '../constants';
import { pluginPermissions } from '../permissions';
import { appendCollectionPath } from '../utils/routing';
import type { CollectionData } from '../types/service.types';

export function useCollections() {
  const { isLoading, allowedActions } = useRBAC(pluginPermissions);
  const { collectionKind, collectionUid, overrideNavigate } = useRouting();
  const { getAllCollections } = services();

  const [targetCollection, setTargetCollection] = useState<string>('');
  const [allCollections, setAllCollections] = useState<CollectionData[]>([]);
  const [filteredCollections, setFilteredCollections] = useState<CollectionData[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<CollectionData | null>(null);
  const [isInvalidCollection, setIsInvalidCollection] = useState<boolean>(false);
  const [isCollectionLoading, setIsCollectionLoading] = useState<boolean>(true);

  const fetchCollections = async () => {
    const data = await getAllCollections();
    if (data) {
      // TODO: make this plugin config driven
      // const allData = [...data, ...OTHERS];
      const allData = [...data];
      setAllCollections(allData);
      setFilteredCollections(allData);
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
    fetchCollections();
  }, []);

  useEffect(() => {
    setIsInvalidCollection(false);
    setIsCollectionLoading(true);

    if (!collectionUid && collectionKind === '') {
      /** Navigate to Recents */
      setSelectedCollection(RECENTS);
      setIsInvalidCollection(false);
      setIsCollectionLoading(false);
      return;
    }

    const matched = allCollections.find((collection) => collection.uid === collectionUid);

    if (matched) {
      /** Just set the collection as selected to make the list item active */
      setIsCollectionLoading(false);
      setSelectedCollection(matched);
    } else {
      setIsCollectionLoading(false);
      setIsInvalidCollection(true);
    }
  }, [collectionKind, collectionUid, allCollections, isInvalidCollection, isCollectionLoading]);

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
