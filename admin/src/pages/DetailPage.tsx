import { useAuditLogs } from '../hooks/useAuditLogs';
import { VersionsSidebar } from '../components/layout/VersionsSidebar';
import { DocumentView } from '../components/document-view/DocumentView';
import { DetailContentLayout } from '../components/layout/DetailContentLayout';

export const DetailPage = () => {
  const { auditLogLoading, auditLog, auditLogError, relatedLogs } = useAuditLogs();

  return (
    <DetailContentLayout
      isLoading={auditLogLoading}
      isEmpty={!auditLog}
      isInvalid={auditLogError === 'invalid'}
      hasError={auditLogError === 'network-error'}
      content={auditLog && <DocumentView data={auditLog} />}
      rightSidebar={
        <VersionsSidebar
          logs={relatedLogs}
          isLoading={auditLogLoading}
          isInvalid={auditLogError === 'invalid'}
          hasError={auditLogError === 'network-error'}
        />
      }
    />
  );
};
