import { Flex } from '@strapi/design-system';

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex
      direction="column"
      width="100%"
      height="100%"
      gap="4px"
      alignItems="flex-start"
      flex="1"
      minWidth="0"
      marginLeft="231px"
    >
      {children}
    </Flex>
  );
}
