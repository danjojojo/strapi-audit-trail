import { createContext, useContext, type ReactNode } from 'react';
import { useAuditLogs } from '../hooks/useAuditLogs';

const AuditLogsContext = createContext<ReturnType<typeof useAuditLogs> | undefined>(undefined);

export function useAuditLogsContext() {
  const context = useContext(AuditLogsContext);
  if (!context) {
    throw new Error('useAuditLogsContext must be used within AuditProvider!');
  }
  return context;
}

export function AuditLogsProvider({ children }: { children: ReactNode }) {
  return <AuditLogsContext.Provider value={useAuditLogs()}>{children}</AuditLogsContext.Provider>;
}
