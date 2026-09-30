import { Header } from '../ui/Header';
import { useCollectionContext } from '../../providers/collection.provider';

export function HomepageHeader() {
  const { selectedCollection } = useCollectionContext();

  return <Header title={selectedCollection?.name} />;
}
