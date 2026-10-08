import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { HomepageHeader } from '../components/home/Header';
import { useCollectionContext } from '../providers/collection.provider';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const LoginSessionsPage = () => {
  const { isCollectionLoading } = useCollectionContext();
  const { auditLogs, auditLogsLoading } = useAuditLogs();

  return (
    <LandingContentLayout>
      <HomepageHeader />
      {auditLogsLoading || isCollectionLoading ? (
        <Loader />
      ) : !auditLogsLoading && auditLogs.length > 0 ? (
        <Table
          data={auditLogs}
          columns={{
            show: ['action', 'relatedDocumentId', 'actionFrom', 'createdAt'],
          }}
        />
      ) : (
        <EmptyState
          content="No CMS user logins were recorded yet. Entries will show up here when any user login occurs."
          hideAction
        />
      )}
    </LandingContentLayout>
  );
};
