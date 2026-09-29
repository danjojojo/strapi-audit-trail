import { styled } from 'styled-components';
import { Flex } from '@strapi/design-system';
import { SidebarHeader } from './SidebarHeader';
import { SidebarSearch } from './SidebarSearch';
import { SidebarContent } from './SidebarContent';

const StyledSidebar = styled(Flex)`
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
`;

export function Sidebar() {
  return (
    <StyledSidebar direction="column" background="neutral0" height="100vh" width="231px">
      <SidebarHeader />
      <SidebarSearch />
      <SidebarContent />
    </StyledSidebar>
  );
}
