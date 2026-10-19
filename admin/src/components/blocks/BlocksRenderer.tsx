import { List } from './block-fields/List';
import { Code } from './block-fields/Code';
import { Quote } from './block-fields/Quote';
import { Image } from './block-fields/Image';
import { Heading } from './block-fields/Heading';
import { ListItem } from './block-fields/ListItem';
import { Paragraph } from './block-fields/Paragraph';
import { InlineCode } from './block-modifiers/InlineCode';
import { BlocksRenderer as StrapiBlocksRenderer } from '@strapi/blocks-react-renderer';
import type { BlocksRendererProps } from '../../types/block.types';

export function BlocksRenderer({ value }: BlocksRendererProps) {
  return (
    <StrapiBlocksRenderer
      content={value}
      blocks={{
        paragraph: ({ children }) => {
          return <Paragraph>{children}</Paragraph>;
        },
        heading: ({ children, level }) => {
          return <Heading level={level}>{children}</Heading>;
        },
        quote: ({ children }) => {
          return <Quote>{children}</Quote>;
        },
        list: ({ children, format }) => {
          return <List format={format}>{children}</List>;
        },
        'list-item': ({ children }) => {
          return <ListItem>{children}</ListItem>;
        },
        image: ({ children, image }) => {
          return <Image data={image}>{children}</Image>;
        },
        code: ({ children }) => {
          return <Code>{children}</Code>;
        },
      }}
      modifiers={{
        code: ({ children }) => {
          return <InlineCode>{children}</InlineCode>;
        },
      }}
    />
  );
}
