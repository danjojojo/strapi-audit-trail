import { styled } from 'styled-components';
import { Flex, Box } from '@strapi/design-system';
import type { ImageBlockProps } from '@/types/block.types';

const ImageWrapper = styled(Flex)`
  transition-property: box-shadow;
  transition-duration: 0.2s;
  & > img {
    height: auto;
    max-height: calc(512px - 56px);
    max-width: 100%;
    object-fit: contain;
  }
`;

export function Image({ data, children }: ImageBlockProps) {
  const { url, alternativeText, width, height } = data;
  return (
    <Box>
      {children}
      <ImageWrapper background="neutral100" justifyContent="center" hasRadius>
        <img src={url} alt={alternativeText ?? 'image'} width={width} height={height} />
      </ImageWrapper>
    </Box>
  );
}
