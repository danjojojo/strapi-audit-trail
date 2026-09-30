import { Typography, Box } from '@strapi/design-system';
import { useCollectionContext } from '../../providers/collection.provider';

export function Header() {
  const { selectedCollection } = useCollectionContext();

  return (
    <Box paddingTop="40px" paddingLeft="56px" paddingRight="56px" paddingBottom="40px">
      <Typography variant="alpha">{selectedCollection?.name ?? 'Recents'}</Typography>
    </Box>
  );
}
