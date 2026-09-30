import { RECENTS } from '../constants';
import { useRouting } from './useRouting';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { homepageService } from '../services/homepage.service';
import { appendCollectionPath, stripPath } from '../utils/routing';
import type { CollectionData } from '../types/homepage.service.types';

export function useCollections() {
  const navigate = useNavigate();
  const { collectionUid } = useRouting();
  const { getAllCollections } = homepageService();

  const [targetCollection, setTargetCollection] = useState<string>('');
  const [allCollections, setAllCollections] = useState<CollectionData[]>([]);
  const [filteredCollections, setFilteredCollections] = useState<CollectionData[]>([]);
  const [selectedCollection, setSelectedCollection] = useState<CollectionData | null>(null);

  const fetchCollections = async () => {
    const data = await getAllCollections();
    if (data) {
      setAllCollections(data);
      setFilteredCollections(data);
    }
  };

  const selectCollection = (collection: CollectionData) => {
    setSelectedCollection(collection);
    navigate(stripPath(appendCollectionPath(collection)), { replace: true });
  };

  const filterCollection = (keyword: string) => {
    if (!keyword) setFilteredCollections(allCollections);

    setTargetCollection(keyword);

    setFilteredCollections(
      allCollections.filter((collection) =>
        collection.name.toLowerCase().startsWith(keyword.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  useEffect(() => {
    if (!collectionUid) {
      return selectCollection(RECENTS);
    }

    const matched = allCollections.find((collection) => collection.uid === collectionUid);
    if (matched) {
      selectCollection(matched);
    }
  }, [collectionUid, allCollections]);

  return {
    /** STATES */
    targetCollection,
    selectedCollection,
    collectionTypes: filteredCollections.filter((c) => c.kind === 'collectionType'),
    singleTypes: filteredCollections.filter((c) => c.kind === 'singleType'),

    /** METHODS */
    selectCollection,
    filterCollection,
  };
}
