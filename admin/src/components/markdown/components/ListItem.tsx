import { Typography } from '@strapi/design-system';
import type { MarkdownCompProps } from '../../../types/markdown.types';

export function ListItem({ children }: MarkdownCompProps) {
  return (
    <Typography tag="li" variant="omega">
      {children}
    </Typography>
  );
}
