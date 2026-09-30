import { useState, useEffect } from 'react';
import { homepageService } from '../services/homepage.service';
import type { CollectionData } from '../types/homepage.service.types';

export function useCollections() {
  const { getAllCollections } = homepageService();

  const [allCollections, setAllCollections] = useState<CollectionData[]>([]);
  const [targetCollection, setTargetCollection] = useState<string>('');
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
  };

  const selectRecents = () => {
    setSelectedCollection({
      uid: 'recents',
      name: 'Recents',
    });
  };

  const filterCollection = (keyword: string) => {
    if (!keyword) setFilteredCollections(allCollections);

    setTargetCollection(keyword);
    setFilteredCollections(
      allCollections.filter((collection) => collection.name.toLowerCase().startsWith(keyword))
    );
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return {
    // STATES
    allCollections,
    targetCollection,
    selectedCollection,
    filteredCollections,

    // METHODS
    selectRecents,
    selectCollection,
    filterCollection,
  };
}
