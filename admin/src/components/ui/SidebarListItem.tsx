import { stripPath } from '../../utils/routing';
import { useRouting } from '../../hooks/useRouting';
import { Box, Typography, LinkButton } from '@strapi/design-system';
import type { MouseEvent } from 'react';
import type { SidebarListItemProps } from '../../types/ui.types';

export function SidebarListItem({ active, href, label }: SidebarListItemProps) {
  const { overrideNavigate } = useRouting();

  return (
    <Box
      width="100%"
      maxWidth="207px"
      borderRadius="4px"
      background={active ? 'neutral100' : undefined}
    >
      <LinkButton
        variant="ghost"
        width="100%"
        justifyContent="flex-start"
        href={href}
        onClick={(e: MouseEvent<HTMLButtonElement>) => overrideNavigate(href, e)}
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
      </LinkButton>
    </Box>
  );
}
