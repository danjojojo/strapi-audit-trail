import { ErrorPage } from './ErrorPage';
import { Table } from '../components/ui/Table';
import { Loader } from '../components/ui/Loader';
import { ErrorState } from '../components/ui/ErrorState';
import { EmptyState } from '../components/ui/EmptyState';
import { useAuditLogins } from '../hooks/useAuditLogins';
import { ERROR, LOGIN_RESULT_COLORS } from '../constants';
import { HomepageHeader } from '../components/home/Header';
import { useCollectionContext } from '../providers/collection.provider';
import { AuditLoginDialog } from '../components/audit-logins/AuditLoginDialog';
import { LandingContentLayout } from '../components/layout/LandingContentLayout';

export const LoginSessionsPage = () => {
  const { isCollectionLoading, isInvalidCollection } = useCollectionContext();
  const { auditLogins, auditLoginsError, auditLoginsLoading, auditLoginsMeta } = useAuditLogins();

  if (!auditLoginsLoading && !isCollectionLoading && isInvalidCollection) {
    return <ErrorPage content={ERROR.BASE.INVALID} />;
  }

  return (
    <LandingContentLayout>
      <HomepageHeader />
      {auditLoginsLoading || isCollectionLoading ? (
        <Loader />
      ) : auditLoginsError === 'invalid' ? (
        <ErrorState content={ERROR.BASE.ERROR} />
      ) : auditLoginsError === 'network-error' ? (
        <ErrorState content={ERROR.BASE.ERROR} />
      ) : !auditLoginsLoading && auditLogins.length > 0 ? (
        <Table
          data={auditLogins}
          columns={{
            show: ['emailAddress', 'loginResult', 'requestTime', 'userClient'],
            datetime: ['requestTime'],
            override: {
              loginResult: 'Result',
            },
            badge: {
              column: 'loginResult',
              colors: LOGIN_RESULT_COLORS,
            },
          }}
          rowDialog={(rowData, onClose) => <AuditLoginDialog data={rowData} onClose={onClose} />}
          pagination={{
            pageCount: auditLoginsMeta?.pageCount ?? 1,
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
