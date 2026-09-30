import { Box, Button, Typography } from '@strapi/design-system';
import type { SidebarListItemProps } from '../../types/ui.types';

export function SidebarListItem({ active, onClick, label }: SidebarListItemProps) {
  return (
    <Box
      width="100%"
      maxWidth="207px"
      borderRadius="4px"
      background={active ? 'neutral100' : undefined}
    >
      <Button
        variant="ghost"
        width="100%"
        justifyContent="flex-start"
        onClick={onClick}
        paddingLeft="8px"
      >
        <Typography
          variant="omega"
          textAlign="left"
          width="100%"
          textColor={active ? 'primary600' : 'neutral1000'}
          fontWeight={active ? 600 : 400}
        >
          {label}
        </Typography>
      </Button>
    </Box>
  );
}
