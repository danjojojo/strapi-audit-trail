import { RECENTS } from '../constants';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { homepageService } from '../services/homepage.service';
import type { CollectionData } from '../types/homepage.service.types';

export function useCollections() {
  const navigate = useNavigate();
  const params = useParams();
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
    navigate(collection.uid, { replace: true });
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

  useEffect(() => {
    const uid = params['*']?.split('/')[0];

    if (!uid) {
      navigate(RECENTS.uid, { replace: true });
      return;
    }

    if (uid === RECENTS.uid) {
      setSelectedCollection(RECENTS);
      return;
    }

    const matched = allCollections.find((collection) => collection.uid === uid);
    if (matched) {
      setSelectedCollection(matched);
    }
  }, [params.uid, params['*'], allCollections]);

  return {
    // STATES
    allCollections,
    targetCollection,
    selectedCollection,
    filteredCollections,

    // METHODS
    selectCollection,
    filterCollection,
  };
}
