import { AuditLogsProvider } from './audit-logs.provider';
import { CollectionProvider } from './collection.provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CollectionProvider>
        <AuditLogsProvider>{children}</AuditLogsProvider>
      </CollectionProvider>
    </>
  );
}
