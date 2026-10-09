import { Flex } from '@strapi/design-system';

export function DetailContentLayout({
  content,
  rightSidebar,
}: {
  content: React.ReactNode;
  rightSidebar: React.ReactNode;
}) {
  return (
    <Flex gap="20px" height="100%" width="100%">
      <Flex
        direction="column"
        gap="40px"
        alignItems="flex-start"
        width="100%"
        height="100%"
        paddingTop="40px"
        paddingLeft="56px"
        paddingRight="40px"
        paddingBottom="40px"
      >
        {content}
      </Flex>
      {rightSidebar}
    </Flex>
  );
}
