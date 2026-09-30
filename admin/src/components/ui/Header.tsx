import { ArrowLeft } from '@strapi/icons';
import { useNavigate } from 'react-router-dom';
import { Typography, Flex, Link } from '@strapi/design-system';
import type { HeaderProps } from '../../types/ui.types';

export function Header({ title, backUrl }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Flex
      gap="4px"
      paddingTop="40px"
      paddingLeft="56px"
      paddingRight="56px"
      paddingBottom="40px"
      direction="column"
      width="100%"
      alignItems="flex-start"
    >
      {backUrl && (
        <Link onClick={() => navigate(backUrl, { replace: true })} startIcon={<ArrowLeft />}>
          Back
        </Link>
      )}
      <Typography variant="alpha" textAlign="left">
        {title}
      </Typography>
    </Flex>
  );
}
