import { ACTION_COLORS } from '../constants';
import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { HomepageHeader } from '../components/home/Header';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const HomePage = () => {
  const { auditLogs, auditLogsLoading } = useAuditLogs();

  return (
    <LandingContentLayout>
      <HomepageHeader />
      {auditLogsLoading ? (
        <Loader />
      ) : auditLogs.length > 0 ? (
        <Table
          data={auditLogs}
          columns={{
            show: ['action', 'relatedDocumentId', 'actionFrom', 'createdAt'],
            override: {
              relatedDocumentId: 'documentId',
            },
            badge: {
              column: 'action',
              colors: ACTION_COLORS,
            },
          }}
          rowLink={['contentTypeKind', 'collectionUid', 'relatedDocumentId']}
        />
      ) : (
        <EmptyState />
      )}
    </LandingContentLayout>
  );
};
