import { styled } from 'styled-components';

const MarkdownCode = styled.pre`
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

const BlocksModifierCode = styled.code`
  background-color: ${({ theme }) => theme.colors.neutral150};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `0 ${theme.spaces[2]}`};
  font-family:
    'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
  color: inherit;
`;

const BlocksBlockCode = styled.pre`
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

export const StyledCode = {
  Markdown: MarkdownCode,
  BlocksCode: BlocksBlockCode,
  BlocksModifier: BlocksModifierCode,
};
