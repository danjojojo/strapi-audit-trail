import { styled } from 'styled-components';
import { Flex } from '@strapi/design-system';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { SidebarSearch } from './sidebar/SidebarSearch';
import { SidebarContent } from './sidebar/SidebarContent';

const StyledSidebar = styled(Flex)`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  position: fixed;
  top: 0;
  left: 56px;
  height: 100vh;
  overflow-y: auto;
`;

export function Sidebar() {
  return (
    <StyledSidebar direction="column" background="neutral0" width="231px" shrink="0">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarContent />
    </StyledSidebar>
  );
}
