import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { appendToContentManagerPath, stripPath } from '../utils/routing';
import type { MouseEvent } from 'react';

export function useRouting() {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const path = params['*']?.split('/');
  const collectionKind = path?.[0];
  const collectionUid = path?.[1];
  const documentId = path?.[2];
  const contentTypePath = appendToContentManagerPath(`${collectionKind}/${collectionUid}`);

  const overrideNavigate = (url: string, e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (e) e.preventDefault();
    navigate(stripPath(url));
  };

  // preserves existing query params while adding/updating one
  const appendParam = (key: string, value: string) => {
    setSearchParams((prev) => {
      prev.set(key, value);
      return prev;
    });
  };

  return {
    collectionKind,
    collectionUid,
    documentId,
    contentTypePath,
    overrideNavigate,
    appendParam,
    searchParams,
  };
}
