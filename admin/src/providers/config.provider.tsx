import { createContext, useContext, type ReactNode } from 'react';
import { useConfig } from '../hooks/useConfig';

const ConfigContext = createContext<ReturnType<typeof useConfig> | undefined>(undefined);

export function useConfigContext() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error('useConfigContext must be used within ConfigProvider!');
  }
  return context;
}

export function ConfigProvider({ children }: { children: ReactNode }) {
  return <ConfigContext.Provider value={useConfig()}>{children}</ConfigContext.Provider>;
}
