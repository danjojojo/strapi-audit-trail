import { List } from './components/List';
import { Code } from './components/Code';
import { Quote } from './components/Quote';
import { Image } from './components/Image';
import { Heading } from './components/Heading';
import { ListItem } from './components/ListItem';
import { Paragraph } from './components/Paragraph';
import { InlineCode } from './modifiers/InlineCode';
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
