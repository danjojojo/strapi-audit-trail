import { BlocksLayout } from '../styled/BlocksLayout';
import { Dialog } from '@strapi/design-system';
import { BlocksToolkit } from './BlocksToolkit';
import { Expand, Collapse } from '@strapi/icons';
import { BlocksRenderer } from './BlocksRenderer';
import type { BlocksRendererProps } from '../../types/block.types';

export function BlocksDialogView({ value }: BlocksRendererProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <BlocksLayout.ToggleViewIcon label="Expand">
          <Expand />
        </BlocksLayout.ToggleViewIcon>
      </Dialog.Trigger>
      <BlocksLayout.Dialog.Container>
        <BlocksToolkit />
        <BlocksLayout.Dialog.Scrollable>
          <BlocksLayout.Dialog.BlocksRendererWrapper>
            <BlocksRenderer value={value} />
          </BlocksLayout.Dialog.BlocksRendererWrapper>
        </BlocksLayout.Dialog.Scrollable>
        <BlocksLayout.Footer>
          <Dialog.Cancel>
            <BlocksLayout.ToggleViewIcon label="Collapse">
              <Collapse />
            </BlocksLayout.ToggleViewIcon>
          </Dialog.Cancel>
        </BlocksLayout.Footer>
      </BlocksLayout.Dialog.Container>
    </Dialog.Root>
  );
}
