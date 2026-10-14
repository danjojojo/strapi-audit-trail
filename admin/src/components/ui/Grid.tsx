import { styled } from 'styled-components';
import { Box } from '@strapi/design-system';

export const GridRow = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spaces[5]};
  width: 100%;
`;

export const GridItem = styled(Box)<{ $size: number }>`
  grid-column: span ${({ $size }) => Math.min(Math.max($size, 1), 12)};
  min-width: 0;
`;
