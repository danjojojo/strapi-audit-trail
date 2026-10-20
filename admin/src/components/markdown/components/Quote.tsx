import { Paragraph } from './Paragraph';
import { StyledBlockquote } from '../../styled/StyledBlockquote';
import type { MarkdownCompProps } from '../../../types/markdown.types';

export function Quote({ children }: MarkdownCompProps) {
  return (
    <div>
      <StyledBlockquote>
        <Paragraph>{children}</Paragraph>
      </StyledBlockquote>
    </div>
  );
}
