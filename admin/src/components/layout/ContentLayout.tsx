import { Flex } from '@strapi/design-system';

export function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="column" height="100%" width="100%" gap="4px" alignItems="flex-start">
      {children}
    </Flex>
  );
}
