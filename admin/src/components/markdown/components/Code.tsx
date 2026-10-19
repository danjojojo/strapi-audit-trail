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

const CodeBlock = styled.pre`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.neutral200};
  max-width: 100%;
  overflow: auto;
  padding: ${({ theme }) => theme.spaces[2]};
  flex-shrink: 1;

  & > code {
    font-family:
      'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
    color: ${({ theme }) => theme.colors.neutral800};
    font-size: 1.2rem;
    font-weight: 400;
    overflow: auto;
    max-width: 100%;
  }
`;