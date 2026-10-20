import { Box } from '@strapi/design-system';
import { StyledImage } from '../../styled/StyledImage';
import type { ImageBlockProps } from '../../../types/block.types';

export function Image({ data, children }: ImageBlockProps) {
  const { url, alternativeText, width, height } = data;
  return (
    <Box>
      {children}
      <StyledImage background="neutral100" justifyContent="center" hasRadius>
        <img src={url} alt={alternativeText ?? 'image'} width={width} height={height} />
      </StyledImage>
    </Box>
  );
}
