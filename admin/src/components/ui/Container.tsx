import { Flex } from '@strapi/design-system';

export function NormalContainer({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      direction="column"
      background="neutral0"
      hasRadius={true}
      shadow="tableShadow"
      width="100%"
      height="100%"
      padding="24px"
      gap="20px"
      borderColor="neutral150"
    >
      {children}
    </Flex>
  );
}
