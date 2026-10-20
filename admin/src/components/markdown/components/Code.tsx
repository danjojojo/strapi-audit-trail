import { Box } from '@strapi/design-system';
import { StyledCode } from '../../styled/StyledCode';
import type { MarkdownCompProps } from '../../../types/markdown.types';

export function Code({ children }: MarkdownCompProps) {
  return (
    <Box position="relative" width="100%">
      <StyledCode.Markdown>
        <code>{children}</code>
      </StyledCode.Markdown>
    </Box>
  );
}
