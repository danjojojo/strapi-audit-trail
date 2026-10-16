import { Typography } from '@strapi/design-system';
import type { BaseBlock } from '@/types/block.types';

export function ListItem({ children }: BaseBlock) {
  return (
    <Typography tag="li" variant="omega">
      {children}
    </Typography>
  );
}
