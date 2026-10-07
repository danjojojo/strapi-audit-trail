import { useRouting } from './useRouting';
import { useEffect, useState } from 'react';
import { homepageService } from '../services/homepage.service';
import { getClientDatetime, getActionFrom } from '../helpers/audit-logs-formatters';
import type { GetAuditLogsResponse } from '../types/homepage.service.types';

export function useAuditLogs() {
  const { getAuditLogs } = homepageService();
  const { collectionUid, documentId } = useRouting();
  const [auditLogs, setAuditLogs] = useState<GetAuditLogsResponse>([]);

  const fetchAuditLogs = async (
    collectionUid: string | undefined,
    documentId: string | undefined
  ) => {
    const data = await getAuditLogs(collectionUid, documentId);

    if (data) {
      setAuditLogs(
        data.map((d) => ({
          ...d,
          createdAt: getClientDatetime(d.createdAt),
          actionFrom: getActionFrom(d.actionFrom),
        }))
      );
    }
  };

  useEffect(() => {
    fetchAuditLogs(collectionUid, documentId);
  }, [collectionUid, documentId]);

  return {
    auditLogs,
  };
}
