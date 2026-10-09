import { Status } from '../ui/Status';
import { Loader } from '../ui/Loader';
import { styled } from 'styled-components';
import { ErrorState } from '../ui/ErrorState';
import { getClientDatetime, getActionFrom } from '../../helpers/audit-logs-formatters';
import { Flex, Typography, Badge, Button, ScrollArea } from '@strapi/design-system';
import type { AuditLogsData } from '../../types/service.types';
import { useRouting } from '../../hooks/useRouting';

const StyledSidebar = styled(Flex)`
  border-left: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

const StyledSidebarHeader = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

const StyledVersionButton = styled(Button)<{ $active?: boolean }>`
  height: auto;
  width: 100%;
  padding: 0;
  border-color: ${({ theme, $active }) => ($active ? theme.colors.primary500 : undefined)};
  border-width: ${({ $active }) => ($active ? '2px' : undefined)};
`;

export function VersionsSidebar({
  logs,
  isLoading,
  hasError = false,
}: {
  logs: AuditLogsData[];
  isLoading: boolean;
  hasError?: boolean;
}) {
  const { appendParam, searchParams } = useRouting();
  const currentActionValue = searchParams.get('action');
  const currentCreatedAtValue = searchParams.get('createdAt');
  return (
    <StyledSidebar direction="column" height="100%" width="400px" background="neutral0">
      <StyledSidebarHeader padding="14px" width="100%" justifyContent="space-between">
        <Typography variant="omega">Versions</Typography>
        <Badge>{logs?.length}</Badge>
      </StyledSidebarHeader>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorState />
      ) : (
        <ScrollArea>
          <Flex padding="14px" direction="column" gap="8px" width="100%" height="100%">
            {logs.map((version, index) => (
              <StyledVersionButton
                variant="tertiary"
                key={index}
                justifyContent="flex-start"
                onClick={() => {
                  appendParam('action', version.action);
                  appendParam('createdAt', version.createdAt);
                }}
                $active={
                  currentActionValue === version.action &&
                  currentCreatedAtValue === version.createdAt
                }
              >
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
                    {getClientDatetime(version.createdAt)}
                  </Typography>
                  <Typography
                    variant="pi"
                    textColor="neutral500"
                    fontWeight={400}
                    paddingBottom="12px"
                    textAlign="left"
                  >
                    by {getActionFrom(version.actionFrom)}
                    {index === 0 && (
                      <Typography variant="pi" textColor="primary600" fontWeight={400}>
                        {' '}
                        {'(current)'}
                      </Typography>
                    )}
                  </Typography>
                  <Status value={version.action} />
                </Flex>
              </StyledVersionButton>
            ))}
          </Flex>
        </ScrollArea>
      )}
    </StyledSidebar>
  );
}
