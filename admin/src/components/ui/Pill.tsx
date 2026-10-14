import { styled } from 'styled-components';
import { Flex, Typography } from '@strapi/design-system';

const StyledFlex = styled(Flex)`
  border-radius: 99999px !important;
`;

export function Pill({ value }: { value: string }) {
  return (
    <StyledFlex
      direction="column"
      background="neutral0"
      shadow="tableShadow"
      width="auto"
      height="100%"
      paddingTop="12px"
      paddingBottom="12px"
      paddingLeft="16px"
      paddingRight="16px"
    >
      <Typography fontWeight="bold" variant="pi" textColor="neutral400">
        {value}
      </Typography>
    </StyledFlex>
  );
}
