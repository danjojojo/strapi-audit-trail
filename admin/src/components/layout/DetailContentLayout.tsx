import { Loader } from '../ui/Loader';
import { ERROR } from '../../constants';
import { EmptyState } from '../ui/EmptyState';
import { ErrorState } from '../ui/ErrorState';
import { DetailPageHeader } from '../detail/Header';
import { Flex, ScrollArea } from '@strapi/design-system';
import { DetailContentLayoutProps } from '../../types/detail.types';

export function DetailContentLayout({
  content,
  rightSidebar,
  isLoading,
  hasError,
  isInvalid,
  isEmpty,
}: DetailContentLayoutProps) {
  return (
    <Flex height="100%" width="100%">
      {isLoading ? (
        <DetailPageWrapper>
          <Loader />
        </DetailPageWrapper>
      ) : isInvalid ? (
        <DetailPageWrapper>
          <ErrorState content={ERROR.VERSION.INVALID_DETAIL} />
        </DetailPageWrapper>
      ) : hasError ? (
        <DetailPageWrapper>
          <ErrorState content={ERROR.VERSION.ERROR_DETAIL} />
        </DetailPageWrapper>
      ) : isEmpty ? (
        <DetailPageWrapper>
          <EmptyState content={ERROR.VERSION.EMPTY_DETAIL} />
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
