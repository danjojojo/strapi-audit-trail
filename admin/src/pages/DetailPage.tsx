import { useAuditLogs } from '../hooks/useAuditLogs';
import { VersionsSidebar } from '../components/layout/VersionsSidebar';
import { DetailContentLayout } from '../components/layout/DetailContentLayout';
import { DocumentView } from '../components/document-view/DocumentView';

export const DetailPage = () => {
  const { auditLogLoading, auditLog, relatedLogs } = useAuditLogs();

  return (
    <DetailContentLayout
      isLoading={auditLogLoading}
      hasError={!auditLog}
      content={auditLog && <DocumentView data={auditLog} />}
      rightSidebar={<VersionsSidebar logs={relatedLogs} isLoading={auditLogLoading} />}
    />
  );
};
