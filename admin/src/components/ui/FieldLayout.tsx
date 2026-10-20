import { Box, Flex } from '@strapi/design-system';
import { styled, DefaultTheme } from 'styled-components';

export const FieldLayout = {
  /** CONTAINER FOR ALL ROWS */
  Container: styled(Flex)<{ $backgroundColor?: keyof DefaultTheme['colors'] }>`
    flex-direction: column;
    background: ${({ theme, $backgroundColor }) => theme.colors?.[$backgroundColor ?? 'neutral100']};
    width: 100%;
    height: 100%;
    padding: 24px;
    gap: 20px;
  `,
  /** FIELDS ROW */
  Row: styled(Box)`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${({ theme }) => theme.spaces[5]};
    width: 100%;
  `,
  /** FIELD SIZE */
  RowItem: styled(Box)<{ $size: number }>`
    grid-column: span ${({ $size }) => Math.min(Math.max($size, 1), 12)};
    min-width: 0;
  `,
  /** AS SPACER FOR DYNAMIC ZONE FIELD COMPONENTS */
  Spacer: styled(Box)`
    width: 8px;
    height: 16px;
    background: ${({ theme }) => theme.colors.neutral200};
    margin: 0 auto;
  `,
};
