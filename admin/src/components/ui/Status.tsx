import { ACTION_COLORS } from '../../constants';
import { Box, Typography } from '@strapi/design-system';
import { spaceCamelCase } from '../../helpers/audit-logs-formatters';

export function Status({ value }: { value: keyof typeof ACTION_COLORS }) {
  return (
    <Box
      hasRadius
      paddingTop="4px"
      paddingBottom="4px"
      paddingLeft="8px"
      paddingRight="8px"
      borderColor="neutral300"
      background={ACTION_COLORS?.[value]?.backgroundColor}
      color={ACTION_COLORS?.[value]?.textColor}
      textAlign="center"
      width="fit-content"
    >
      <Typography fontWeight="bold">{spaceCamelCase(value, 'capitalize')}</Typography>
    </Box>
  );
}
