import { Flex } from '@strapi/design-system';
import { SidebarListItem } from '../../ui/SidebarListItem';
import { SidebarListTitle } from '../../ui/SidebarListTitle';
import { useAppContext } from '../../../providers/app.provider';

export function SidebarContent() {
  const { filteredCollections, selectCollection, selectedCollection } = useAppContext();
  const collections = filteredCollections;

  return (
    <Flex direction="column" paddingTop="16px" paddingBottom="16px" width="100%" height="100%">
      <SidebarListTitle title="Collections" count={collections.length} />

      <Flex gap="3px" width="100%" paddingTop="8px" direction="column">
        {collections.map((collection, index) => (
          <SidebarListItem
            key={index}
            label={collection.name}
            onClick={() => selectCollection(collection)}
            active={selectedCollection?.uid === collection.uid}
          />
        ))}
      </Flex>
    </Flex>
  );
}
