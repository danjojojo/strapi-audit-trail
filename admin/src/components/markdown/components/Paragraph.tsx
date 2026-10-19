import { Typography } from '@strapi/design-system';
import type { BaseBlock } from '../../../types/block.types';

export function Paragraph({ children }: BaseBlock) {
  return (
    <Typography tag="p" variant="omega">
      {children}
    </Typography>
  );
}
