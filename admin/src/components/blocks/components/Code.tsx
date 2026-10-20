import { Box } from '@strapi/design-system';
import { StyledCode } from '../../styled/StyledCode';
import type { BaseBlock } from '../../../types/block.types';

export function Code({ children }: BaseBlock) {
  return (
    <Box position="relative" width="100%">
      <StyledCode.BlocksCode>
        <code>{children}</code>
      </StyledCode.BlocksCode>
    </Box>
  );
}
