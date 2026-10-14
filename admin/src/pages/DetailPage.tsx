import { useMemo } from 'react';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { DetailPageHeader } from '../components/detail/Header';
import { VersionsSidebar } from '../components/layout/VersionsSidebar';
import { DetailContentLayout } from '../components/layout/DetailContentLayout';
import { DocumentView } from '../components/document-view/DocumentView';

export const DetailPage = () => {
  const { auditLogLoading, auditLog, relatedLogs } = useAuditLogs();

  return (
    <DetailContentLayout
      content={
        <>
          <DetailPageHeader />
          {auditLog ? <DocumentView data={auditLog} /> : <EmptyState />}
        </>
      }
      rightSidebar={<VersionsSidebar logs={relatedLogs} isLoading={auditLogLoading} />}
    />
  );
};
