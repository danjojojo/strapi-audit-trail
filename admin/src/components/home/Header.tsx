import { Header } from '../ui/Header';
import { useCollectionContext } from '../../providers/collection.provider';

export function HomepageHeader({ title }: { title?: string }) {
  const { selectedCollection } = useCollectionContext();

  return <Header title={title ?? selectedCollection?.name} />;
}
