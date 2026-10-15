import { ErrorPage } from './ErrorPage';
import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { ACTION_COLORS, ERROR } from '../constants';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { ErrorState } from '../components/ui/ErrorState';
import { HomepageHeader } from '../components/home/Header';
import { useCollectionContext } from '../providers/collection.provider';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const RecentsPage = () => {
  const { auditLogs, auditLogsLoading, auditLogsError, auditLogsMeta } = useAuditLogs();
  const { isCollectionLoading, isInvalidCollection } = useCollectionContext();

  if (isInvalidCollection) {
    return <ErrorPage content={ERROR.CONTENT_TYPE.INVALID} />;
  }

  return (
    <LandingContentLayout>
      <HomepageHeader title="Recents" count={auditLogsMeta?.total} />
      {auditLogsLoading || isCollectionLoading ? (
        <Loader />
      ) : auditLogsError === 'invalid' ? (
        <ErrorState content={ERROR.CONTENT_TYPE.ERROR_RECENTS} />
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
            datetime: ['createdAt'],
          }}
          rowLink={{
            path: ['contentTypeKind', 'collectionUid', 'relatedDocumentId'],
            params: ['action', 'createdAt'],
          }}
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
