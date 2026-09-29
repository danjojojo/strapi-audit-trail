import { Typography, Box } from '@strapi/design-system';
import { useAppContext } from '../../providers/app.provider';

export function Header() {
  const { selectedCollection } = useAppContext();

  return (
    <Box paddingTop="40px" paddingLeft="56px" paddingRight="56px" paddingBottom="40px">
      <Typography variant="alpha">{selectedCollection?.name ?? 'Recents'}</Typography>
    </Box>
  );
}
