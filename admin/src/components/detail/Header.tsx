import { Header } from '../ui/Header';
import { PLUGIN_ID } from '../../pluginId';
import { useRouting } from '../../hooks/useRouting';

export function DetailPageHeader() {
  const { collectionKind, collectionUid, documentId } = useRouting();

  return (
    <Header
      title={documentId}
      backUrl={`/plugins/${PLUGIN_ID}/${collectionKind}/${collectionUid}`}
    />
  );
}
