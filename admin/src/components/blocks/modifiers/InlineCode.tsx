import { StyledCode } from '../../styled/StyledCode';
import type { BaseBlock } from '../../../types/block.types';

export function InlineCode({ children }: BaseBlock) {
  return <StyledCode.BlocksModifier>{children}</StyledCode.BlocksModifier>;
}
