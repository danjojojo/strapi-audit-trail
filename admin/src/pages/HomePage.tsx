import { ErrorPage } from './ErrorPage';
import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { ACTION_COLORS, ERROR } from '../constants';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { HomepageHeader } from '../components/home/Header';
import { useCollectionContext } from '../providers/collection.provider';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const HomePage = () => {
  const { auditLogs, auditLogsLoading } = useAuditLogs();
  const { isInvalidCollection, isCollectionLoading } = useCollectionContext();

  if (isInvalidCollection) {
    return <ErrorPage content={ERROR.INVALID_COLLECTION} />;
  }

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
