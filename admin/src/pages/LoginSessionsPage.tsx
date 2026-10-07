import { Table } from '../components/ui/Table';
import { EmptyState } from '../components/ui/EmptyState';
import { HomepageHeader } from '../components/home/Header';
import { useAuditLogsContext } from '../providers/audit-logs.provider';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const LoginSessionsPage = () => {
  const { auditLogs } = useAuditLogsContext();

  return (
    <LandingContentLayout>
      <HomepageHeader />
      {auditLogs.length > 0 ? (
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
