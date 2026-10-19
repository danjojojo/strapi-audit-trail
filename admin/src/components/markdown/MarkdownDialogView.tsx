import { Expand, Collapse } from '@strapi/icons';
import { MarkdownLayout } from './MarkdownLayout';
import { MarkdownHeader } from './MarkdownHeader';
import { ParsedMarkdown } from './ParsedMarkdown';
import { Dialog, Button, Typography } from '@strapi/design-system';
import type { MarkdownProps } from '../../types/markdown.types';

export function MarkdownDialog({ value }: MarkdownProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="ghost" endIcon={<Expand />}>
          <Typography variant="omega" fontWeight="400">
            Expand
          </Typography>
        </Button>
      </Dialog.Trigger>
      <MarkdownLayout.Dialog.Container>
        <MarkdownLayout.Dialog.RawMarkdown>
          <MarkdownHeader.Toolkit hideModeBtn />
          <MarkdownLayout.Dialog.Scrollable>
            <MarkdownLayout.ValueWrapper>
              <Typography>{value}</Typography>
            </MarkdownLayout.ValueWrapper>
          </MarkdownLayout.Dialog.Scrollable>
        </MarkdownLayout.Dialog.RawMarkdown>

        <MarkdownLayout.Dialog.ParsedMarkdown>
          <MarkdownLayout.Header.Container>
            <Dialog.Cancel>
              <Button variant="ghost" endIcon={<Collapse />} marginLeft="auto">
                <Typography variant="omega" fontWeight="400">
                  Collapse
                </Typography>
              </Button>
            </Dialog.Cancel>
          </MarkdownLayout.Header.Container>
          <MarkdownLayout.Dialog.Scrollable>
            <MarkdownLayout.ValueWrapper>
              <ParsedMarkdown value={value} />
            </MarkdownLayout.ValueWrapper>
          </MarkdownLayout.Dialog.Scrollable>
        </MarkdownLayout.Dialog.ParsedMarkdown>
      </MarkdownLayout.Dialog.Container>
    </Dialog.Root>
  );
}
