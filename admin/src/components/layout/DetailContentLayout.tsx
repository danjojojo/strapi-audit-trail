import { Loader } from '../ui/Loader';
import { EmptyState } from '../ui/EmptyState';
import { DetailPageHeader } from '../detail/Header';
import { Flex, ScrollArea } from '@strapi/design-system';

export function DetailContentLayout({
  content,
  rightSidebar,
  isLoading,
  hasError,
}: {
  content: React.ReactNode;
  rightSidebar: React.ReactNode;
  isLoading: boolean;
  hasError: boolean;
}) {
  return (
    <Flex height="100%" width="100%">
      {isLoading ? (
        <DetailPageWrapper>
          <Loader />
        </DetailPageWrapper>
      ) : hasError ? (
        <DetailPageWrapper>
          <EmptyState content="Activities for this document were not yet recorded. Create or publish updates with this entry to record an activity." />
        </DetailPageWrapper>
      ) : (
        <ScrollArea>
          <DetailPageWrapper>{content}</DetailPageWrapper>
        </ScrollArea>
      )}
      {rightSidebar}
    </Flex>
  );
}

function DetailPageWrapper({ children }: { children: React.ReactNode }) {
  return (
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
      <DetailPageHeader />
      {children}
    </Flex>
  );
}
