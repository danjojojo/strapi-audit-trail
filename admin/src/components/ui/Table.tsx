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
import { useRouting } from '../../hooks/useRouting';
import { appendToPluginPath } from '../../utils/routing';
import { spaceCamelCase } from '../../helpers/audit-logs-formatters';
import type { TableProps } from '../../types/ui.types';

/**
 * When using this, make sure to pass value to `data` prop first before everything else, as this will allow you to fetch the proper values for the columns.
 */
export function Table<T extends Record<string, any>, S extends keyof T & string>({
  data,
  columns,
  rowLink,
}: TableProps<T, S>) {
  const { overrideNavigate } = useRouting();

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
                if (rowLink && rowLink.length > 0) {
                  let url: string = '';
                  for (const link of rowLink) {
                    url += `${row?.[link]}/`;
                  }
                  overrideNavigate(appendToPluginPath(url));
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
                      <Box
                        hasRadius
                        paddingTop="4px"
                        paddingBottom="4px"
                        paddingLeft="8px"
                        paddingRight="8px"
                        borderColor="neutral300"
                        background={columns?.badge?.colors?.[badgeValue]?.backgroundColor}
                        color={columns?.badge?.colors?.[badgeValue]?.textColor}
                        textAlign="center"
                        width="fit-content"
                      >
                        <Typography fontWeight="bold">
                          {spaceCamelCase(badgeValue, 'capitalize')}
                        </Typography>
                      </Box>
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
    </Box>
  );
}
