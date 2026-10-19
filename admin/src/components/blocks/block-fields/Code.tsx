import { styled } from 'styled-components';
import { Box } from '@strapi/design-system';
import type { BaseBlock } from '../../../types/block.types';

export function Code({ children }: BaseBlock) {
  return (
    <Box position="relative" width="100%">
      <CodeBlock>
        <code>{children}</code>
      </CodeBlock>
    </Box>
  );
}

export function ModifierCode({ children }: BaseBlock) {
  return <InlineCode>{children}</InlineCode>;
}

const CodeBlock = styled.pre`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.neutral100};
  max-width: 100%;
  overflow: auto;
  padding: ${({ theme }) => `${theme.spaces[3]} ${theme.spaces[4]}`};
  flex-shrink: 1;

  & > code {
    font-family:
      'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
    color: ${({ theme }) => theme.colors.neutral800};
    font-size: 1.4rem;
    overflow: auto;
    max-width: 100%;
  }
`;

const InlineCode = styled.code`
  background-color: ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  font-family:
    'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
  color: inherit;
`;
