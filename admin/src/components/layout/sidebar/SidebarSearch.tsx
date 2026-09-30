import { Flex } from '@strapi/design-system';
import { SearchInput } from '../../ui/SearchInput';
import { useCollectionContext } from '../../../providers/collection.provider';

export function SidebarSearch() {
  const { filterCollection, targetCollection } = useCollectionContext();

  return (
    <Flex paddingTop="20px" paddingLeft="20px" paddingRight="20px">
      <SearchInput
        value={targetCollection}
        wipeAction={() => filterCollection('')}
        onChangeAction={(value) => filterCollection(value)}
      />
    </Flex>
  );
}
