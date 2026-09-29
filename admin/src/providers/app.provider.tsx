import { createContext, useContext } from 'react';
import { useCollections } from '../hooks/useCollections';

const AppContext = createContext<ReturnType<typeof useCollections> | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const hook = useCollections();
  return <AppContext.Provider value={hook}>{children}</AppContext.Provider>;
}
