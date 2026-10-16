import { BlocksLayout } from './BlocksLayout';
import { BlocksToolkit } from './BlocksToolkit';
import { BlocksRenderer } from './BlocksRenderer';
import { BlocksDialogView } from './BlocksDialogView';
import type { BlocksRendererProps } from '@/types/block.types';

export function BlocksDetailView({ value }: BlocksRendererProps) {
  const { DetailViewWrapper, DetailViewContent, DetailViewBlocksRendererWrapper } = BlocksLayout;
  return (
    <DetailViewContent>
      <BlocksToolkit />
      <DetailViewWrapper>
        <DetailViewBlocksRendererWrapper>
          <BlocksRenderer value={value} />
        </DetailViewBlocksRendererWrapper>
        <BlocksDialogView value={value} />
      </DetailViewWrapper>
    </DetailViewContent>
  );
}
