import { styled } from 'styled-components';
import { Flex, IconButton, Dialog as StrapiDialog, ScrollArea, Box } from '@strapi/design-system';

const Header = {
  Container: styled(Flex)`
    padding: 8px;
    width: 100%;
    height: fit-content;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
  `,
  ToolkitIconGroup: styled(Flex)`
    gap: 4px;
  `,
  ToolkitIcon: styled(IconButton)`
    border: none;
    padding: 8px;
  `,
  ToolkitSeparator: styled(Box)`
    width: 1px;
    height: 24px;
    margin: 0px 8px;
    background-color: ${({ theme }) => theme.colors.neutral150};
  `,
};

const ToggleViewIcon = styled(IconButton)`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
`;

const Footer = styled(StrapiDialog.Footer)`
  border: none;
  padding: 0px;
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
    width: 100%;
    height: 452.62px;
  `,
  BlocksRendererWrapper: styled(Flex)`
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    width: 100%;
    padding: 24px;
  `,
};

const Dialog = {
  Container: styled(StrapiDialog.Content)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 90vw !important;
    height: 90vh !important;
    max-height: 90vh !important;
    max-width: 90vw !important;
  `,
  Scrollable: styled(ScrollArea)`
    position: relative;
    width: 100%;
  `,
  BlocksRendererWrapper: styled(Flex)`
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
    width: 512px;
    margin: 0 auto;
    padding: 24px;
  `,
};

export const BlocksLayout = {
  Header,
  ToggleViewIcon,
  Footer,
  Detail,
  Dialog,
};
