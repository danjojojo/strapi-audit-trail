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
import { BlocksLayout } from './BlocksLayout';
import { SingleSelect, SingleSelectOption } from '@strapi/design-system';
import type { ToolkitProps } from '../../types/block.types';

export function BlocksToolkit() {
  const { Header, ToolkitSeparator, ToolkitIcon, ToolkitIconGroup } = BlocksLayout;

  return (
    <Header>
      <SingleSelect disabled value="text" startIcon={<Paragraph />}>
        <SingleSelectOption value="text">Text</SingleSelectOption>
      </SingleSelect>

      <ToolkitSeparator />

      <ToolkitIconGroup>
        {modifiers.map((modifier, idx) => (
          <ToolkitIcon disabled label={modifier.label} key={idx}>
            {modifier.icon}
          </ToolkitIcon>
        ))}
      </ToolkitIconGroup>

      <ToolkitSeparator />

      <ToolkitIconGroup>
        {lists.map((list, idx) => (
          <ToolkitIcon disabled label={list.label} key={idx}>
            {list.icon}
          </ToolkitIcon>
        ))}
      </ToolkitIconGroup>
    </Header>
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
