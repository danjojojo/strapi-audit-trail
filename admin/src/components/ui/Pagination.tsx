import {
  Flex,
  PageLink,
  NextLink,
  PreviousLink,
  Dots,
  Pagination as StrapiPagination,
} from '@strapi/design-system';
import { useRouting } from '../../hooks/useRouting';
import { stringToNumber } from '../../utils/numbers';

type PageItem = number | 'start-dots' | 'end-dots';

function getPageItems(pageCount: number, activePage: number): PageItem[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  if (activePage <= 4) {
    return [1, 2, 3, 4, 5, 'end-dots', pageCount];
  }
  if (activePage >= pageCount - 3) {
    return [1, 'start-dots', pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
  }
  return [1, 'start-dots', activePage - 1, activePage, activePage + 1, 'end-dots', pageCount];
}

export function Pagination({ pageCount }: { pageCount: number }) {
  const { appendParam, searchParams } = useRouting();

  const activePage = stringToNumber({
    value: searchParams.get('page'),
    returnedValueIfError: 1,
    maxCap: pageCount,
  });

  return (
    <Flex paddingTop="40px" paddingBottom="40px" width="100%" justifyContent="flex-end">
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

          {getPageItems(pageCount, activePage === 0 ? 1 : activePage).map((item) => {
            if (typeof item !== 'number') {
              return <Dots key={item}>More pages</Dots>;
            }
            return (
              <PageLink
                key={item}
                number={item}
                href={`?page=${item}`}
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
                ) => {
                  e.preventDefault();
                  appendParam('page', item.toString());
                }}
              >
                {`Go to page ${item}`}
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
