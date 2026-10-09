import { Header } from '../ui/Header';
import { PLUGIN_ID } from '../../pluginId';
import { useRouting } from '../../hooks/useRouting';

export function DetailPageHeader({ title }: { title?: string }) {
  const { collectionKind, collectionUid, documentId } = useRouting();

  return (
    <Header
      title={title ?? documentId}
      backUrl={`/plugins/${PLUGIN_ID}/${collectionKind}/${collectionUid}`}
    />
  );
}
