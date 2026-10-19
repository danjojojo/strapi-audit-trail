import { ParsedMarkdown } from './ParsedMarkdown';
import { Typography } from '@strapi/design-system';
import { useMarkdownContext } from '../../providers/markdown-mode.provider';
import type { MarkdownProps } from '../../types/markdown.types';

export function MarkdownValue({ value }: MarkdownProps) {
  const { enablePreview } = useMarkdownContext();
  return !enablePreview ? <Typography>{value}</Typography> : <ParsedMarkdown value={value} />;
}
