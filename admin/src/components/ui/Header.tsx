import { ArrowLeft } from '@strapi/icons';
import { useNavigate } from 'react-router-dom';
import { Typography, Flex, Link } from '@strapi/design-system';
import type { MouseEvent } from 'react';
import type { HeaderProps } from '../../types/ui.types';

export function Header({ title, backUrl }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Flex gap="4px" direction="column" width="100%" alignItems="flex-start">
      {backUrl && (
        <Link
          href={backUrl}
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            if (window.history.state?.idx > 0) {
              navigate(-1);
            } else {
              navigate(backUrl);
            }
          }}
          startIcon={<ArrowLeft />}
        >
          Back
        </Link>
      )}
      <Typography variant="alpha" textAlign="left">
        {title}
      </Typography>
    </Flex>
  );
}
