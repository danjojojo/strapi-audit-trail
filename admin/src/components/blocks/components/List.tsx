import { createContext, useContext } from 'react';
import { StyledList } from '../../styled/StyledList';
import type { ListBlockProps } from '../../../types/block.types';

const ListIndentContext = createContext(0);

export function List({ format, children }: ListBlockProps) {
  const indentLevel = useContext(ListIndentContext);
  const listStyles = format === 'ordered' ? StyledList.OrderedTypes : StyledList.UnorderedTypes;
  const nextIndex = indentLevel % listStyles.length;
  const listStyleType = listStyles[nextIndex];

  const list =
    format === 'ordered' ? (
      <StyledList.Ordered $listStyleType={listStyleType}>{children}</StyledList.Ordered>
    ) : (
      <StyledList.Unordered $listStyleType={listStyleType}>{children}</StyledList.Unordered>
    );

  return <ListIndentContext.Provider value={indentLevel + 1}>{list}</ListIndentContext.Provider>;
}
