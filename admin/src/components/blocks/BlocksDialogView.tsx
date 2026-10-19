import { BlocksLayout } from './BlocksLayout';
import { Dialog } from '@strapi/design-system';
import { BlocksToolkit } from './BlocksToolkit';
import { Expand, Collapse } from '@strapi/icons';
import { BlocksRenderer } from './BlocksRenderer';
import type { BlocksRendererProps } from '../../types/block.types';

export function BlocksDialogView({ value }: BlocksRendererProps) {
  const {
    Footer,
    ToggleViewIcon,
    DialogViewContent,
    DialogViewWrapper,
    DialogViewBlocksRendererWrapper,
  } = BlocksLayout;

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ToggleViewIcon label="Expand">
          <Expand />
        </ToggleViewIcon>
      </Dialog.Trigger>
      <DialogViewContent>
        <BlocksToolkit />
        <DialogViewWrapper>
          <DialogViewBlocksRendererWrapper>
            <BlocksRenderer value={value} />
          </DialogViewBlocksRendererWrapper>
        </DialogViewWrapper>
        <Footer>
          <Dialog.Cancel>
            <ToggleViewIcon label="Collapse">
              <Collapse />
            </ToggleViewIcon>
          </Dialog.Cancel>
        </Footer>
      </DialogViewContent>
    </Dialog.Root>
  );
}
