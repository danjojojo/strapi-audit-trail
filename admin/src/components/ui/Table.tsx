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
import { ACTION_COLORS } from '../../constants';
import { useTable } from '../../hooks/useTable';
import { spaceCamelCase, getClientDatetime } from '../../helpers/audit-logs-formatters';
import type { TableProps } from '../../types/ui.types';

/**
 * When using this, make sure to pass value to `data` prop first before everything else, as this will allow you to fetch the proper values for the columns.
 */
export function Table<T extends Record<string, any>, S extends keyof T & string>({
  data,
  columns,
  rowLink,
  rowDialog,
  pagination,
}: TableProps<T, S>) {
  const { dialogRow, isInteractive, closeDialogRow, interactRow } = useTable<T, S>({
    rowLink,
    rowDialog,
  });

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
              cursor={isInteractive ? 'pointer' : undefined}
              tabIndex={isInteractive ? 0 : undefined}
              _focusVisible={{ outline: '2px solid', outlineColor: 'primary600' }}
              onClick={() => interactRow(row)}
              onKeyDown={(e: React.KeyboardEvent) => {
                if (!isInteractive) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  interactRow(row);
                }
              }}
            >
              {columns.show.map((column, columnIdx) => {
                if (columns?.badge?.column !== undefined && column === columns?.badge?.column) {
                  const badgeValue = row?.[column];
                  return (
                    <Td key={columnIdx} paddingTop="16px" paddingBottom="16px">
                      <Status value={badgeValue} colors={columns.badge.colors ?? ACTION_COLORS} />
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

      {rowDialog && dialogRow && rowDialog(dialogRow, closeDialogRow)}
    </Box>
  );
}
