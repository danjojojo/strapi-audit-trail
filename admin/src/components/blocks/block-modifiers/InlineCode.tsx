import { styled } from 'styled-components';
import type { BaseBlock } from '@/types/block.types';

export function InlineCode({ children }: BaseBlock) {
  return <Code>{children}</Code>;
}

const Code = styled.code`
  background-color: ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  font-family:
    'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
  color: inherit;
`;
