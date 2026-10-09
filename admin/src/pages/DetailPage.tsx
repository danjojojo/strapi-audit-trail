import { useAuditLogs } from '../hooks/useAuditLogs';
import { EmptyState } from '../components/ui/EmptyState';
import { DetailPageHeader } from '../components/detail/Header';
import { VersionsSidebar } from '../components/layout/VersionsSidebar';
import { DetailContentLayout } from '../components/layout/DetailContentLayout';

export const DetailPage = () => {
  const { auditLogLoading, relatedLogs } = useAuditLogs();
  return (
    <DetailContentLayout
      content={
        <>
          <DetailPageHeader />
          <EmptyState />
        </>
      }
      rightSidebar={<VersionsSidebar logs={relatedLogs} isLoading={auditLogLoading} />}
    />
  );
};
