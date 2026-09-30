import { useParams } from 'react-router-dom';

export function useRouting() {
  const params = useParams();

  const path = params['*']?.split('/');

  const collectionKind = path?.[0];
  const collectionUid = path?.[1];
  const documentId = path?.[2];

  return {
    collectionKind,
    collectionUid,
    documentId,
  };
}
