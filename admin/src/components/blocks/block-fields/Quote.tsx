import { Paragraph } from './Paragraph';
import { styled } from 'styled-components';
import type { BaseBlock } from '@/types/block.types';

export function Quote({ children }: BaseBlock) {
  return (
    <div>
      <Blockquote>
        <Paragraph>{children}</Paragraph>
      </Blockquote>
    </div>
  );
}

const Blockquote = styled.blockquote.attrs({ role: 'blockquote' })`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  border-left: ${({ theme }) => `${theme.spaces[1]} solid ${theme.colors.neutral200}`};
  padding: ${({ theme }) => theme.spaces[2]} ${({ theme }) => theme.spaces[4]};
  color: ${({ theme }) => theme.colors.neutral600};
`;
