import { Flex, Typography, Badge, Button, ScrollArea } from '@strapi/design-system';
import { DetailPageHeader } from '../components/detail/Header';
import { EmptyState } from '../components/ui/EmptyState';
import { styled } from 'styled-components';
import { getActionFrom, getClientDatetime } from '../helpers/audit-logs-formatters';
import { useAuditLogs } from '../hooks/useAuditLogs';
import { Status } from '../components/ui/Status';
import { useCollectionContext } from '../providers/collection.provider';
import { useCollections } from '../hooks/useCollections';

const VersionsSidebar = styled(Flex)`
  border-left: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

const VersionsSidebarHeader = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

const VersionButton = styled(Button)`
  height: auto;
  width: 100%;
  padding: 0;
`;

export const SingleTypePage = () => {
  const { selectedCollection } = useCollections();
  const { auditLogs, auditLogsMeta, auditLogsLoading } = useAuditLogs();
  return (
    <Flex gap="20px" height="100%" width="100%">
      <Flex
        direction="column"
        gap="40px"
        alignItems="flex-start"
        width="100%"
        height="100%"
        paddingTop="40px"
        paddingLeft="56px"
        paddingRight="40px"
        paddingBottom="40px"
      >
        <DetailPageHeader title={selectedCollection?.name} />
        <EmptyState />
      </Flex>
      <VersionsSidebar direction="column" height="100%" width="400px" background="neutral0">
        <VersionsSidebarHeader padding="14px" width="100%" justifyContent="space-between">
          <Typography variant="omega">Versions</Typography>
          <Badge>{auditLogsMeta?.total}</Badge>
        </VersionsSidebarHeader>
        <ScrollArea tag="versions">
          <Flex padding="14px" direction="column" gap="8px" width="100%" height="100%">
            {auditLogs.map((version, index) => (
              <VersionButton variant="tertiary" key={index} justifyContent="flex-start">
                <Flex
                  direction="column"
                  paddingTop="12px"
                  paddingBottom="12px"
                  paddingLeft="14px"
                  paddingRight="14px"
                  width="100%"
                  height="100%"
                  alignItems="flex-start"
                >
                  <Typography variant="omega" fontWeight={400} paddingBottom="10px">
                    {version.createdAt}
                  </Typography>
                  <Typography
                    variant="pi"
                    textColor="neutral500"
                    fontWeight={400}
                    paddingBottom="12px"
                  >
                    by {version.actionFrom} {index === 0 ? '(current)' : ''}
                  </Typography>
                  <Status value={version.action} />
                </Flex>
              </VersionButton>
            ))}
          </Flex>
        </ScrollArea>
      </VersionsSidebar>
    </Flex>
  );
};
