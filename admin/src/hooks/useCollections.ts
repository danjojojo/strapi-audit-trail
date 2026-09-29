import { useState, useEffect } from 'react';
import { homepageService } from '../services/homepage.service';
import type { GetAllCollectionsResponse } from '../types/homepage.service.types';

export function useCollections() {
  const { getAllCollections } = homepageService();
  const [collections, setCollections] = useState<GetAllCollectionsResponse[]>([]);

  const fetchCollections = async () => {
    const data = await getAllCollections();
    if (data) setCollections(data);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return {
    collections,
  };
}
