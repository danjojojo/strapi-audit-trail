import { Box, Typography } from '@strapi/design-system';
import { spaceCamelCase } from '../../helpers/audit-logs-formatters';
import type { StatusProps } from '../../types/ui.types';

export function Status({ value, colors }: StatusProps) {
  return (
    <Box
      hasRadius
      paddingTop="4px"
      paddingBottom="4px"
      paddingLeft="8px"
      paddingRight="8px"
      borderColor="neutral300"
      background={colors?.[value]?.backgroundColor}
      color={colors?.[value]?.textColor}
      textAlign="center"
      width="fit-content"
    >
      <Typography fontWeight="bold">{spaceCamelCase(value, 'capitalize')}</Typography>
    </Box>
  );
}
