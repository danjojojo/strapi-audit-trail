import { Paragraph } from './Paragraph';
import { StyledBlockquote } from '../../styled/StyledBlockquote';
import type { BaseBlock } from '../../../types/block.types';

export function Quote({ children }: BaseBlock) {
  return (
    <div>
      <StyledBlockquote>
        <Paragraph>{children}</Paragraph>
      </StyledBlockquote>
    </div>
  );
}
