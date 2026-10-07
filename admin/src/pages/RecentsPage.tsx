import { ACTION_COLORS } from '../constants';
import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { HomepageHeader } from '../components/home/Header';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const RecentsPage = () => {
  const { auditLogs, auditLogsLoading } = useAuditLogs();

  return (
    <LandingContentLayout>
      <HomepageHeader title="Recents" />
      {auditLogsLoading ? (
        <Loader />
      ) : auditLogs.length > 0 ? (
        <Table
          data={auditLogs}
          columns={{
            show: ['action', 'collectionName', 'relatedDocumentId', 'actionFrom', 'createdAt'],
            override: {
              relatedDocumentId: 'documentId',
              collectionName: 'collection',
            },
            badge: {
              column: 'action',
              colors: ACTION_COLORS,
            },
          }}
          rowLink={['contentTypeKind', 'collectionUid', 'relatedDocumentId']}
        />
      ) : (
        <EmptyState
          content="No activities across content types were recorded yet. Make an event within the content types listed in the sidebar to record an activity."
          hideAction
        />
      )}
    </LandingContentLayout>
  );
};
