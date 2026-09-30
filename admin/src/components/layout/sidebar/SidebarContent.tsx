import { Flex } from '@strapi/design-system';
import { RECENTS } from '../../../constants';
import { SidebarListItem } from '../../ui/SidebarListItem';
import { SidebarListTitle } from '../../ui/SidebarListTitle';
import { useCollectionContext } from '../../../providers/collection.provider';
import { appendToPluginPath, appendCollectionPath } from '../../../utils/routing';

export function SidebarContent() {
  const { collectionTypes, singleTypes, otherCollections, selectedCollection } =
    useCollectionContext();

  return (
    <Flex direction="column" paddingTop="16px" paddingBottom="16px" width="100%" height="100%">
      <Flex width="100%" paddingBottom="8px" direction="column">
        <SidebarListItem
          key={RECENTS.uid}
          label={RECENTS.name}
          href={appendToPluginPath('/recents')}
          active={selectedCollection?.uid === RECENTS.uid}
        />
      </Flex>

      <SidebarListTitle title="Collection Types" count={collectionTypes.length} />
      <Flex gap="3px" width="100%" paddingTop="8px" paddingBottom="24px" direction="column">
        {collectionTypes.map((collection, index) => {
          return (
            <SidebarListItem
              key={index}
              label={collection.name}
              href={appendCollectionPath(collection)}
              active={selectedCollection?.uid === collection.uid}
            />
          );
        })}
      </Flex>

      <SidebarListTitle title="Single Types" count={singleTypes.length} />
      <Flex gap="3px" width="100%" paddingTop="8px" paddingBottom="24px" direction="column">
        {singleTypes.map((collection, index) => {
          return (
            <SidebarListItem
              key={index}
              label={collection.name}
              href={appendCollectionPath(collection)}
              active={selectedCollection?.uid === collection.uid}
            />
          );
        })}
      </Flex>

      <SidebarListTitle title="Others" count={otherCollections.length} />
      <Flex gap="3px" width="100%" paddingTop="8px" paddingBottom="24px" direction="column">
        {otherCollections.map((collection, index) => {
          return (
            <SidebarListItem
              key={index}
              label={collection.name}
              href={appendCollectionPath(collection)}
              active={selectedCollection?.uid === collection.uid}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}
