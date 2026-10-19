import {
  Flex,
  Button,
  ScrollArea,
  IconButton,
  Dialog as StrapiDialog,
} from '@strapi/design-system';
import { styled } from 'styled-components';

const Header = {
  Container: styled(Flex)`
    max-height: 48.4px;
    padding: 8px;
    width: 100%;
    height: fit-content;
    background: ${({ theme }) => theme.colors.neutral100};
    border-radius: 4px 4px 0px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  `,
  ToolkitRow: styled(Flex)`
    padding-left: 16px;
    width: fit-content;
    gap: 8px;
  `,
  ToolkitIcon: styled(IconButton)`
    padding: 7px;
  `,
  ModeButton: styled(Button)`
    margin-left: auto;
    width: 132px;
  `,
};

const Footer = styled(Flex)`
  padding: 8px;
  width: 100%;
  height: fit-content;
  background: ${({ theme }) => theme.colors.neutral100};
  border-radius: 0px 0px 4px 4px;
  justify-content: flex-end;
`;

const ValueWrapper = styled(Flex)`
  padding: 24px;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
  width: 100%;
  white-space: pre-line;
`;

const Detail = {
  Container: styled(Flex)`
    position: relative;
    flex-direction: column;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.neutral200};
    width: 100%;
    height: 100%;
  `,
  Scrollable: styled(ScrollArea)`
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 452.62px;
    justify-content: start;
    align-items: start;
  `,
};

const Dialog = {
  Container: styled(StrapiDialog.Content)`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 90vw !important;
    height: 90vh !important;
    max-height: 90vh !important;
    max-width: 90vw !important;
  `,
  Scrollable: styled(ScrollArea)`
    position: relative;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: start;
    align-items: start;
  `,
  RawMarkdown: styled(Flex)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
  `,
  ParsedMarkdown: styled(Flex)`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-left: 1px solid ${({ theme }) => theme.colors.neutral200};
  `,
};

export const MarkdownLayout = {
  Header,
  Footer,
  ValueWrapper,
  Detail,
  Dialog,
};
