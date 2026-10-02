import { createContext, useContext, type ReactNode } from 'react';
import { useCollections } from '../hooks/useCollections';

const CollectionContext = createContext<ReturnType<typeof useCollections> | undefined>(undefined);

export function useCollectionContext() {
  const context = useContext(CollectionContext);
  if (!context) {
    throw new Error('useCollectionContext must be used within CollectionProvider!');
  }
  return context;
}

export function CollectionProvider({ children }: { children: ReactNode }) {
  return (
    <CollectionContext.Provider value={useCollections()}>{children}</CollectionContext.Provider>
  );
}
