import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { List } from './components/List';
import { Code } from './components/Code';
import { Quote } from './components/Quote';
import { Heading } from './components/Heading';
import { ListItem } from './components/ListItem';
import { Paragraph } from './components/Paragraph';
import type { MarkdownProps } from '../../types/markdown.types';

export function ParsedMarkdown({ value }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ children }) => <Heading level={1}>{children}</Heading>,
        h2: ({ children }) => <Heading level={2}>{children}</Heading>,
        h3: ({ children }) => <Heading level={3}>{children}</Heading>,
        h4: ({ children }) => <Heading level={4}>{children}</Heading>,
        h5: ({ children }) => <Heading level={5}>{children}</Heading>,
        h6: ({ children }) => <Heading level={6}>{children}</Heading>,
        p: ({ children }) => <Paragraph>{children}</Paragraph>,
        ol: ({ children }) => <List format="ordered">{children}</List>,
        ul: ({ children }) => <List format="unordered">{children}</List>,
        li: ({ children }) => <ListItem>{children}</ListItem>,
        code: ({ children }) => <Code>{children}</Code>,
        blockquote: ({ children }) => <Quote>{children}</Quote>,
      }}
    >
      {value}
    </ReactMarkdown>
  );
}
