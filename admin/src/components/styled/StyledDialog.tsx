import { styled } from 'styled-components';
import { Dialog } from '@strapi/design-system';

export const StyledDialog = {
  Content: styled(Dialog.Content)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 60vw !important;
    height: 100% !important;
    max-height: 60vh !important;
    max-width: 60vw !important;
  `,
};
