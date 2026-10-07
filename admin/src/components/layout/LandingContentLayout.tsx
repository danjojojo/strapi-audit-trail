import { styled } from 'styled-components';
import { Flex } from '@strapi/design-system';

const StyledFlex = styled(Flex)`
  overflow-y: auto;
`;

export function LandingContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledFlex
      direction="column"
      gap="40px"
      alignItems="flex-start"
      width="100%"
      height="100%"
      paddingTop="40px"
      paddingLeft="56px"
      paddingRight="56px"
      paddingBottom="40px"
    >
      {children}
    </StyledFlex>
  );
}
