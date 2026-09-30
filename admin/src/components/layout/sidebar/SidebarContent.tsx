import { Flex } from '@strapi/design-system';
import { SidebarListItem } from '../../ui/SidebarListItem';
import { SidebarListTitle } from '../../ui/SidebarListTitle';
import { useCollectionContext } from '../../../providers/collection.provider';

export function SidebarContent() {
  const { filteredCollections, selectCollection, selectRecents, selectedCollection } =
    useCollectionContext();
  const collections = filteredCollections;

  return (
    <Flex direction="column" paddingTop="16px" paddingBottom="16px" width="100%" height="100%">
      <Flex gap="3px" width="100%" paddingBottom="8px" direction="column">
        <SidebarListItem
          key="recents"
          label="Recents"
          onClick={selectRecents}
          active={selectedCollection?.uid === 'recents'}
        />
      </Flex>
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
