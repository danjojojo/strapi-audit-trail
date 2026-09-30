import { Flex } from '@strapi/design-system';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex direction="row" alignItems="start" height="100%" width="100%">
      {children}
    </Flex>
  );
}
