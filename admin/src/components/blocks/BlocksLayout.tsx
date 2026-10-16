import { styled } from 'styled-components';
import { Flex, IconButton, Dialog, ScrollArea, Box } from '@strapi/design-system';

/** HEADER */
const Header = styled(Flex)`
  padding: 8px;
  width: 100%;
  height: fit-content;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral200};
`;

/** TOOLKIT ICON GROUP */
const ToolkitIconGroup = styled(Flex)`
  gap: 4px;
`;

/** TOOLKIT ICON */
const ToolkitIcon = styled(IconButton)`
  border: none;
  padding: 8px;
`;

/** TOOLKIT SEPARATOR */
const ToolkitSeparator = styled(Box)`
  width: 1px;
  height: 24px;
  margin: 0px 8px;
  background-color: ${({ theme }) => theme.colors.neutral150};
`;

/** TOGGLE VIEW FOR EXPAND OR COLLAPSE */
const ToggleViewIcon = styled(IconButton)`
  position: absolute;
  bottom: 1.2rem;
  right: 1.2rem;
`;

/** DETAIL VIEW PARENT WRAPPER */
const DetailViewContent = styled(Flex)`
  position: relative;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  width: 100%;
  height: 100%;
`;

/** DETAIL VIEW CONTENT WRAPPER */
const DetailViewWrapper = styled(ScrollArea)`
  position: relative;
  width: 100%;
  height: 452.62px;
`;

/** DIALOG VIEW PARENT WRAPPER */
const DialogViewContent = styled(Dialog.Content)`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 90vw !important;
  height: 90vh !important;
  max-height: 90vh !important;
  max-width: 90vw !important;
`;

/** DIALOG VIEW CONTENT WRAPPER */
const DialogViewWrapper = styled(ScrollArea)`
  position: relative;
  width: 100%;
`;

/** DETAIL VIEW BLOCKS RENDERER WRAPPER */
const DetailViewBlocksRendererWrapper = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  width: 100%;
  padding: 24px;
`;

/** DIALOG VIEW BLOCKS RENDERER WRAPPER */
const DialogViewBlocksRendererWrapper = styled(Flex)`
  flex-direction: column;
  align-items: stretch;
  gap: 16px;
  width: 512px;
  margin: 0 auto;
  padding: 24px;
`;

/** DIALOG VIEW FOOTER */
const Footer = styled(Dialog.Footer)`
  border: none;
  padding: 0px;
`;

export const BlocksLayout = {
  Header,
  ToolkitIconGroup,
  ToolkitIcon,
  ToolkitSeparator,
  ToggleViewIcon,

  DetailViewWrapper,
  DetailViewContent,
  DetailViewBlocksRendererWrapper,

  DialogViewWrapper,
  DialogViewContent,
  DialogViewBlocksRendererWrapper,
  Footer,
};
