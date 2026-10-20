import { StyledHeading } from '../../styled/StyledHeading';
import type { HeadingBlockProps, HeadingTag } from '../../../types/block.types';

export function Heading({ children, level }: HeadingBlockProps) {
  const tag = `h${level}` as HeadingTag;

  switch (tag) {
    case 'h1':
      return <StyledHeading.H1>{children}</StyledHeading.H1>;
    case 'h2':
      return <StyledHeading.H2>{children}</StyledHeading.H2>;
    case 'h3':
      return <StyledHeading.H3>{children}</StyledHeading.H3>;
    case 'h4':
      return <StyledHeading.H4>{children}</StyledHeading.H4>;
    case 'h5':
      return <StyledHeading.H5>{children}</StyledHeading.H5>;
    case 'h6':
      return <StyledHeading.H6>{children}</StyledHeading.H6>;
  }
}
