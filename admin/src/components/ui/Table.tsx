import {
  Tr,
  Td,
  Th,
  Box,
  Thead,
  Tbody,
  Typography,
  Table as StrapiTable,
} from '@strapi/design-system';
import { Status } from './Status';
import { Pagination } from './Pagination';
import { useRouting } from '../../hooks/useRouting';
import { appendToPluginPath } from '../../utils/routing';
import { spaceCamelCase, getClientDatetime } from '../../helpers/audit-logs-formatters';
import type { TableProps } from '../../types/ui.types';

/**
 * When using this, make sure to pass value to `data` prop first before everything else, as this will allow you to fetch the proper values for the columns.
 */
export function Table<T extends Record<string, any>, S extends keyof T & string>({
  data,
  columns,
  rowLink,
  pagination,
}: TableProps<T, S>) {
  const { overrideNavigate } = useRouting();

  const getRowLink = (row: T) => {
    if (!rowLink) return null;
    if (!rowLink.path || rowLink.path.length === 0) return null;

    let url: string = '';
    for (const path of rowLink.path) {
      url += `/${row?.[path]}`;
    }

    if (!rowLink.params || rowLink.params.length === 0) return url;

    const params = rowLink.params;
    for (let i = 0; i <= params.length - 1; i++) {
      if (i === 0) {
        url += `?${params[i]}=${row?.[params[i]]}`;
      } else {
        url += `&${params[i]}=${row?.[params[i]]}`;
      }
    }
    return url;
  };

  return (
    <Box width="100%" height="100%">
      <StrapiTable colCount={columns.show.length} rowCount={data.length}>
        <Thead>
          <Tr>
            {columns.show.map((column, idx) => {
              return (
                <Th key={idx}>
                  <Typography variant="sigma">
                    {spaceCamelCase(columns.override?.[column] ?? column)}
                  </Typography>
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIdx) => (
            <Tr
              key={rowIdx}
              height="70px"
              cursor={rowLink ? 'pointer' : undefined}
              onClick={() => {
                const link = getRowLink(row);
                if (link) {
                  overrideNavigate(appendToPluginPath(link));
                } else {
                  return;
                }
              }}
            >
              {columns.show.map((column, columnIdx) => {
                if (columns?.badge?.column !== undefined && column === columns?.badge?.column) {
                  const badgeValue = row?.[column];
                  return (
                    <Td key={columnIdx} paddingTop="16px" paddingBottom="16px">
                      <Status value={badgeValue} />
                    </Td>
                  );
                }

                if (
                  columns?.datetime &&
                  columns.datetime?.length > 0 &&
                  columns.datetime.includes(column)
                ) {
                  return (
                    <Td key={columnIdx}>
                      <Typography textColor="neutral800">
                        {getClientDatetime(row?.[column])}
                      </Typography>
                    </Td>
                  );
                }

                return (
                  <Td key={columnIdx}>
                    <Typography textColor="neutral800">{row?.[column]}</Typography>
                  </Td>
                );
              })}
            </Tr>
          ))}
        </Tbody>
      </StrapiTable>

      {pagination && pagination?.pageCount > 0 && <Pagination pageCount={pagination.pageCount} />}
    </Box>
  );
}
