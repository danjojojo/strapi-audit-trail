import { styled, css, type CSSProperties } from 'styled-components';

const Style = css`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spaces[2]};
  margin-inline-start: ${({ theme }) => theme.spaces[0]};
  margin-inline-end: ${({ theme }) => theme.spaces[0]};
  padding-inline-start: ${({ theme }) => theme.spaces[2]};

  ol,
  ul {
    margin-block-start: ${({ theme }) => theme.spaces[0]};
    margin-block-end: ${({ theme }) => theme.spaces[0]};
  }

  li {
    margin-inline-start: ${({ theme }) => theme.spaces[3]};
  }
`;

const Ordered = styled.ol<{ $listStyleType: CSSProperties['listStyleType'] }>`
  list-style-type: ${(props) => props.$listStyleType};
  ${Style}
`;

const Unordered = styled.ul<{ $listStyleType: CSSProperties['listStyleType'] }>`
  list-style-type: ${(props) => props.$listStyleType};
  ${Style}
`;

const OrderedTypes = ['decimal', 'lower-alpha', 'upper-roman'];
const UnorderedTypes = ['disc', 'circle', 'square'];

export const StyledList = {
  Style,
  Ordered,
  Unordered,
  OrderedTypes,
  UnorderedTypes,
};
