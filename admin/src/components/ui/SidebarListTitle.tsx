import { Flex, Typography, Badge } from '@strapi/design-system';
import type { SidebarListTitleProps } from '../../types/ui.types';

export function SidebarListTitle({ title, count }: SidebarListTitleProps) {
  return (
    <Flex width="100%" justifyContent="space-between" paddingLeft="20px" paddingRight="20px">
      <Typography variant="sigma" textColor="neutral400">
        {title}
      </Typography>
      <Badge>{count}</Badge>
    </Flex>
  );
}
