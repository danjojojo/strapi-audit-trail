import { Typography } from '@strapi/design-system';
import type { MarkdownCompProps } from '../../../types/markdown.types';

export function Paragraph({ children }: MarkdownCompProps) {
  return (
    <Typography tag="p" variant="omega">
      {children}
    </Typography>
  );
}
