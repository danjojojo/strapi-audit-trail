import {
  Bold,
  Italic,
  Underline,
  StrikeThrough,
  Code,
  Link,
  BulletList,
  NumberList,
  Paragraph,
} from '@strapi/icons';
import { BlocksLayout } from '../styled/BlocksLayout';
import { SingleSelect, SingleSelectOption } from '@strapi/design-system';
import type { ToolkitProps } from '../../types/block.types';

export function BlocksToolkit() {
  return (
    <BlocksLayout.Header.Container>
      <SingleSelect disabled value="text" startIcon={<Paragraph />}>
        <SingleSelectOption value="text">Text</SingleSelectOption>
      </SingleSelect>

      <BlocksLayout.Header.ToolkitSeparator />

      <BlocksLayout.Header.ToolkitIconGroup>
        {modifiers.map((modifier, idx) => (
          <BlocksLayout.Header.ToolkitIcon disabled label={modifier.label} key={idx}>
            {modifier.icon}
          </BlocksLayout.Header.ToolkitIcon>
        ))}
      </BlocksLayout.Header.ToolkitIconGroup>

      <BlocksLayout.Header.ToolkitSeparator />

      <BlocksLayout.Header.ToolkitIconGroup>
        {lists.map((list, idx) => (
          <BlocksLayout.Header.ToolkitIcon disabled label={list.label} key={idx}>
            {list.icon}
          </BlocksLayout.Header.ToolkitIcon>
        ))}
      </BlocksLayout.Header.ToolkitIconGroup>
    </BlocksLayout.Header.Container>
  );
}

const modifiers: ToolkitProps[] = [
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
  {
    icon: <Code />,
    label: 'Inline code',
  },
  {
    icon: <Link />,
    label: 'Link',
  },
];

const lists: ToolkitProps[] = [
  {
    icon: <BulletList />,
    label: 'Bulleted list',
  },
  {
    icon: <NumberList />,
    label: 'Numbered list',
  },
];
