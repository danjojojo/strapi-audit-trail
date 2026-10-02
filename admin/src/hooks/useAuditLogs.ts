import { useEffect } from 'react';
import { homepageService } from '../services/homepage.service';
import { useRouting } from './useRouting';

export function useAuditLogs() {
  const { getAuditLogs } = homepageService();
  const { collectionUid, documentId } = useRouting();

  const fetchAuditLogs = async () => {
    const data = await getAuditLogs();
    return data;
  };

  useEffect(() => {
    getAuditLogs(collectionUid ?? undefined, documentId ?? undefined);
  }, [collectionUid, documentId]);

  return {
    fetchAuditLogs,
  };
}
