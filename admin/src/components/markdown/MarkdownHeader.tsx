import {
  Bold,
  Italic,
  Underline,
  StrikeThrough,
  Code,
  Link,
  BulletList,
  NumberList,
  Quotes,
  Image,
} from '@strapi/icons';
import { IconButtonGroup, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import { MarkdownLayout } from '../styled/MarkdownLayout';
import { useMarkdownContext } from '../../providers/markdown-mode.provider';
import type { ToolkitProps } from '../../types/block.types';

const leftToolkit: ToolkitProps[] = [
  {
    icon: <Bold />,
    label: 'Bold',
  },
  {
    icon: <Italic />,
    label: 'Italic',
  },
  {
    icon: <Underline />,
    label: 'Underline',
  },
  {
    icon: <StrikeThrough />,
    label: 'Strikethrough',
  },
];

const centerToolkit: ToolkitProps[] = [
  {
    icon: <BulletList />,
    label: 'Bulleted list',
  },
  {
    icon: <NumberList />,
    label: 'Numbered list',
  },
];

const rightToolkit: ToolkitProps[] = [
  {
    icon: <Code />,
    label: 'Code',
  },
  {
    icon: <Image />,
    label: 'Image',
  },
  {
    icon: <Link />,
    label: 'Link',
  },
  {
    icon: <Quotes />,
    label: 'Quote',
  },
];

function Toolkit({ hideModeBtn = false }: { hideModeBtn?: boolean }) {
  const { enablePreview, setEnablePreview } = useMarkdownContext();

  return (
    <MarkdownLayout.Header.Container>
      <SingleSelect disabled value="headings" size="S">
        <SingleSelectOption value="headings">Headings</SingleSelectOption>
      </SingleSelect>

      <MarkdownLayout.Header.ToolkitRow>
        <IconButtonGroup>
          {leftToolkit.map((t) => (
            <MarkdownLayout.Header.ToolkitIcon label={t.label} disabled>
              {t.icon}
            </MarkdownLayout.Header.ToolkitIcon>
          ))}
        </IconButtonGroup>
        <IconButtonGroup>
          {centerToolkit.map((t) => (
            <MarkdownLayout.Header.ToolkitIcon label={t.label} disabled>
              {t.icon}
            </MarkdownLayout.Header.ToolkitIcon>
          ))}
        </IconButtonGroup>
        <IconButtonGroup>
          {rightToolkit.map((t) => (
            <MarkdownLayout.Header.ToolkitIcon label={t.label} disabled>
              {t.icon}
            </MarkdownLayout.Header.ToolkitIcon>
          ))}
        </IconButtonGroup>
      </MarkdownLayout.Header.ToolkitRow>

      {!hideModeBtn && (
        <MarkdownLayout.Header.ModeButton
          variant="tertiary"
          onClick={() => setEnablePreview((prev) => !prev)}
        >
          {!enablePreview ? 'Preview' : 'Markdown'} mode
        </MarkdownLayout.Header.ModeButton>
      )}
    </MarkdownLayout.Header.Container>
  );
}

export const MarkdownHeader = {
  Toolkit,
};
