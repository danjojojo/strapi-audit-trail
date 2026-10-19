import { styled } from 'styled-components';
import { Typography } from '@strapi/design-system';
import type { HeadingBlockProps, HeadingTag } from '../../../types/block.types';

export function Heading({ children, level }: HeadingBlockProps) {
  const tag = `h${level}` as HeadingTag;

  switch (tag) {
    case 'h1':
      return <H1>{children}</H1>;
    case 'h2':
      return <H2>{children}</H2>;
    case 'h3':
      return <H3>{children}</H3>;
    case 'h4':
      return <H4>{children}</H4>;
    case 'h5':
      return <H5>{children}</H5>;
    case 'h6':
      return <H6>{children}</H6>;
  }
}

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
