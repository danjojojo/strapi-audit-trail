import { BlocksLayout } from '../styled/BlocksLayout';
import { BlocksToolkit } from './BlocksToolkit';
import { BlocksRenderer } from './BlocksRenderer';
import { BlocksDialogView } from './BlocksDialogView';
import type { BlocksRendererProps } from '../../types/block.types';

export function BlocksDetailView({ value }: BlocksRendererProps) {
  return (
    <BlocksLayout.Detail.Container>
      <BlocksToolkit />
      <BlocksLayout.Detail.Scrollable>
        <BlocksLayout.Detail.BlocksRendererWrapper>
          <BlocksRenderer value={value} />
        </BlocksLayout.Detail.BlocksRendererWrapper>
        <BlocksDialogView value={value} />
      </BlocksLayout.Detail.Scrollable>
    </BlocksLayout.Detail.Container>
  );
}
