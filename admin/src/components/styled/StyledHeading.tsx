import { styled } from 'styled-components';
import { Typography } from '@strapi/design-system';

const H1 = styled(Typography).attrs({ tag: 'h1' })`
  font-size: 2.8rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 3.6rem;
  }
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H2 = styled(Typography).attrs({ tag: 'h2' })`
  font-size: 2.2rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 3rem;
  }
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H3 = styled(Typography).attrs({ tag: 'h3' })`
  font-size: 2rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 2.4rem;
  }
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H4 = styled(Typography).attrs({ tag: 'h4' })`
  font-size: 1.8rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 2.4rem;
  }
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H5 = styled(Typography).attrs({ tag: 'h5' })`
  font-size: 1.6rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 2rem;
  }
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

const H6 = styled(Typography).attrs({ tag: 'h6' })`
  font-size: 1.4rem;
  ${({ theme }) => theme.breakpoints.medium} {
    font-size: 1.6rem;
  }
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights[1]};
`;

export const StyledHeading = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
