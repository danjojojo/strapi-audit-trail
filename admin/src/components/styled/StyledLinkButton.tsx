import { styled } from 'styled-components';
import { LinkButton } from '@strapi/design-system';

export const StyledLinkButton = styled(LinkButton)`
  color: ${({ theme }) => theme.colors.primary700} !important;
`;
