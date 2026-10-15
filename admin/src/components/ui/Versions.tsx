import { Status } from './Status';
import { styled } from 'styled-components';
import { Flex, Button, Typography, Badge, ScrollArea } from '@strapi/design-system';
import { getClientDatetime, getActionFrom } from '../../helpers/audit-logs-formatters';
import type { Version, VersionButtonProps } from '../../types/versions.types';

const Sidebar = styled(Flex)`
  border-left: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

const SidebarHeader = styled(Flex)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

const SidebarButton = styled(Button)<{ $active?: boolean }>`
  height: auto;
  width: 100%;
  padding: 0;
  border-color: ${({ theme, $active }) => ($active ? theme.colors.primary500 : undefined)};
  border-width: ${({ $active }) => ($active ? '2px' : undefined)};
`;

const VersionSidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <Sidebar direction="column" height="100%" width="400px" background="neutral0">
      {children}
    </Sidebar>
  );
};

const VersionHeader = ({ versionsCount }: { versionsCount: number }) => {
  return (
    <SidebarHeader padding="14px" width="100%" justifyContent="space-between">
      <Typography variant="omega">Versions</Typography>
      <Badge>{versionsCount}</Badge>
    </SidebarHeader>
  );
};

const VersionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollArea>
      <Flex padding="14px" direction="column" gap="8px" width="100%" height="100%">
        {children}
      </Flex>
    </ScrollArea>
  );
};

const VersionButton = (props: VersionButtonProps) => {
  const { onClick, active, version, isCurrent } = props;

  return (
    <SidebarButton
      variant="tertiary"
      justifyContent="flex-start"
      onClick={onClick}
      $active={active}
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
          {isCurrent && (
            <Typography variant="pi" textColor="primary600" fontWeight={400}>
              {' '}
              {'(current)'}
            </Typography>
          )}
        </Typography>
        <Status value={version.action} />
      </Flex>
    </SidebarButton>
  );
};

export const Versions = {
  Sidebar: VersionSidebar,
  SidebarHeader: VersionHeader,
  SidebarContent: VersionContent,
  SidebarButton: VersionButton,
};
