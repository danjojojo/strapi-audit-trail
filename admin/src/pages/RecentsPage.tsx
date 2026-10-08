import { ErrorPage } from './ErrorPage';
import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { ACTION_COLORS, ERROR } from '../constants';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { HomepageHeader } from '../components/home/Header';
import { useCollectionContext } from '../providers/collection.provider';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const RecentsPage = () => {
  const { isCollectionLoading, isInvalidCollection } = useCollectionContext();
  const { auditLogs, auditLogsLoading, auditLogsMeta } = useAuditLogs();

  if (isInvalidCollection) {
    return <ErrorPage content={ERROR.INVALID_COLLECTION} />;
  }

  return (
    <LandingContentLayout>
      <HomepageHeader title="Recents" />
      {auditLogsLoading || isCollectionLoading ? (
        <Loader />
      ) : !auditLogsLoading && auditLogs.length > 0 ? (
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
          pagination={{
            pageCount: auditLogsMeta?.pageCount ?? 1,
          }}
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
