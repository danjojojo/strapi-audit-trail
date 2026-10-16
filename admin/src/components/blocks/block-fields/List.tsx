import { createContext, useContext } from 'react';
import { styled, css, type CSSProperties } from 'styled-components';
import type { ListBlockProps } from '@/types/block.types';

const ListIndentContext = createContext(0);

export function List({ format, children }: ListBlockProps) {
  const indentLevel = useContext(ListIndentContext);
  const listStyles = format === 'ordered' ? orderedStyles : unorderedStyles;
  const nextIndex = indentLevel % listStyles.length;
  const listStyleType = listStyles[nextIndex];

  const list =
    format === 'ordered' ? (
      <Orderedlist $listStyleType={listStyleType}>{children}</Orderedlist>
    ) : (
      <Unorderedlist $listStyleType={listStyleType}>{children}</Unorderedlist>
    );

  return <ListIndentContext.Provider value={indentLevel + 1}>{list}</ListIndentContext.Provider>;
}

const listStyle = css`
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

const Orderedlist = styled.ol<{ $listStyleType: CSSProperties['listStyleType'] }>`
  list-style-type: ${(props) => props.$listStyleType};
  ${listStyle}
`;

const Unorderedlist = styled.ul<{ $listStyleType: CSSProperties['listStyleType'] }>`
  list-style-type: ${(props) => props.$listStyleType};
  ${listStyle}
`;

const orderedStyles = ['decimal', 'lower-alpha', 'upper-roman'];
const unorderedStyles = ['disc', 'circle', 'square'];
