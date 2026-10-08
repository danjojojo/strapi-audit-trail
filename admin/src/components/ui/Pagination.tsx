import {
  Flex,
  PageLink,
  NextLink,
  PreviousLink,
  Pagination as StrapiPagination,
} from '@strapi/design-system';
import { useRouting } from '../../hooks/useRouting';
import { stringToNumber } from '../../utils/numbers';

export function Pagination({ pageCount }: { pageCount: number }) {
  const { appendParam, searchParams } = useRouting();

  const activePage = stringToNumber({
    value: searchParams.get('page'),
    returnedValueIfError: 1,
    maxCap: pageCount,
  });

  return (
    <Flex paddingTop="40px" paddingBottom="40px" width="100%" alignItems="end">
      {pageCount > 1 ? (
        <StrapiPagination activePage={activePage === 0 ? 1 : activePage} pageCount={pageCount}>
          <PreviousLink
            href={`?page=${activePage - 1}`}
            onClick={(
              e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
            ) => {
              e.preventDefault();
              appendParam('page', (activePage - 1).toString());
            }}
          >
            Previous
          </PreviousLink>

          {Array.from({ length: pageCount }).map((_, idx) => {
            const page = idx + 1;
            return (
              <PageLink
                key={idx}
                number={page}
                href={`?page=${page}`}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
                ) => {
                  e.preventDefault();
                  appendParam('page', page.toString());
                }}
              >
                {`Go to page ${page}`}
              </PageLink>
            );
          })}

          <NextLink
            href={`?page=${activePage + 1}`}
            onClick={(
              e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
            ) => {
              e.preventDefault();
              appendParam('page', (activePage + 1).toString());
            }}
          >
            Next
          </NextLink>
        </StrapiPagination>
      ) : null}
    </Flex>
  );
}
