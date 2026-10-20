import { MarkdownValue } from './MarkdownValue';
import { MarkdownLayout } from '../styled/MarkdownLayout';
import { MarkdownHeader } from './MarkdownHeader';
import { MarkdownDialog } from './MarkdownDialogView';
import { MarkdownProvider } from '../../providers/markdown-mode.provider';
import type { MarkdownProps } from '../../types/markdown.types';

export function MarkdownDetailView({ value }: MarkdownProps) {
  return (
    <MarkdownProvider>
      <MarkdownLayout.Detail.Container>
        <MarkdownHeader.Toolkit />
        <MarkdownLayout.Detail.Scrollable>
          <MarkdownLayout.ValueWrapper>
            <MarkdownValue value={value} />
          </MarkdownLayout.ValueWrapper>
        </MarkdownLayout.Detail.Scrollable>
        <MarkdownLayout.Footer>
          <MarkdownDialog value={value} />
        </MarkdownLayout.Footer>
      </MarkdownLayout.Detail.Container>
    </MarkdownProvider>
  );
}
