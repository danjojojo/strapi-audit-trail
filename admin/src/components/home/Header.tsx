import { Header } from '../ui/Header';
import { useCollectionContext } from '../../providers/collection.provider';

export function HomepageHeader({ title, count }: { title?: string; count?: number }) {
  const { selectedCollection } = useCollectionContext();

  return <Header title={title ?? selectedCollection?.name} count={count} />;
}
