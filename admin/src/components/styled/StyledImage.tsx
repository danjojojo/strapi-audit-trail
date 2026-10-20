import { Flex } from '@strapi/design-system';
import { styled } from 'styled-components';

export const StyledImage = styled(Flex)`
  transition-property: box-shadow;
  transition-duration: 0.2s;
  & > img {
    height: auto;
    max-height: calc(512px - 56px);
    max-width: 100%;
    object-fit: contain;
  }
`;
