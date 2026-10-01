import { useNavigate, useParams } from 'react-router-dom';
import { appendToContentManagerPath, stripPath } from '../utils/routing';
import type { MouseEvent } from 'react';

export function useRouting() {
  const params = useParams();
  const navigate = useNavigate();

  const path = params['*']?.split('/');
  const collectionKind = path?.[0];
  const collectionUid = path?.[1];
  const documentId = path?.[2];
  const contentTypePath = appendToContentManagerPath(`${collectionKind}/${collectionUid}`);

  const overrideNavigate = (url: string, e?: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (e) e.preventDefault();
    navigate(stripPath(url), { replace: true });
  };

  return {
    collectionKind,
    collectionUid,
    documentId,
    contentTypePath,
    overrideNavigate,
  };
}
