import { styled } from 'styled-components';
import { Flex } from '@strapi/design-system';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { SidebarSearch } from './sidebar/SidebarSearch';
import { SidebarContent } from './sidebar/SidebarContent';

const StyledSidebar = styled(Flex)`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

export function Sidebar() {
  return (
    <StyledSidebar direction="column" background="neutral0" height="100vh" width="231px" shrink="0">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarContent />
    </StyledSidebar>
  );
}
