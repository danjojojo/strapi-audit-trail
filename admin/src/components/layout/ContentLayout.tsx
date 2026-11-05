import { styled } from 'styled-components';
import { Flex } from '@strapi/design-system';

const StyledFlex = styled(Flex)`
  position: fixed;
  top: 0;
  left: calc(231px + 56px);
  width: calc(100vw - (231px + 56px));
`;

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledFlex
      direction="column"
      height="100%"
      gap="4px"
      alignItems="flex-start"
      minWidth="0"
    >
      {children}
    </StyledFlex>
  );
}
