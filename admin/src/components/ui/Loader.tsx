import { Loader as StrapiLoader, Flex } from '@strapi/design-system';

export function Loader() {
  return (
    <Flex width="100%" height="100%" justifyContent="center" alignItems="center">
      <StrapiLoader>Loading content...</StrapiLoader>
    </Flex>
  );
}
