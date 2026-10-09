import { useRouting } from './useRouting';
import { useEffect, useState } from 'react';
import { stringToNumber } from '../utils/numbers';
import { homepageService } from '../services/homepage.service';
import { getActionFrom } from '../helpers/audit-logs-formatters';
import type { GetAuditLogsResponse, GetAuditLogs } from '../types/homepage.service.types';

export function useAuditLogs() {
  const { getAuditLogs } = homepageService();
  const { collectionUid, documentId, searchParams } = useRouting();
  const [auditLogs, setAuditLogs] = useState<GetAuditLogsResponse['data']>([]);
  const [auditLogsLoading, setAuditLogsLoading] = useState<boolean>(true);
  const [auditLogsMeta, setAuditLogsMeta] = useState<GetAuditLogsResponse['meta']>();

  const fetchAuditLogs = async ({ collectionUid, documentId, query }: GetAuditLogs) => {
    try {
      setAuditLogsLoading(true);

      const res = await getAuditLogs({ collectionUid, documentId, query });

      if (res?.data) {
        setAuditLogs(
          res?.data.map((d) => ({
            ...d,
            actionFrom: getActionFrom(d.actionFrom),
          }))
        );
      }

      if (res?.meta) {
        setAuditLogsMeta(res.meta);
      }
    } catch (error) {
      setAuditLogsLoading(false);
      console.error(error);
    } finally {
      setAuditLogsLoading(false);
      return;
    }
  };

  const getQuery = () => {
    const _q = searchParams.get('_q') ?? undefined;
    const sort = searchParams.get('sort') ?? undefined;
    const page = stringToNumber({
      value: searchParams.get('page'),
      returnedValueIfError: 1,
      minCap: 1,
    });
    const pageSize = stringToNumber({
      value: searchParams.get('pageSize'),
      returnedValueIfError: 10,
      minCap: 10,
      maxCap: 100,
    });

    return {
      _q,
      sort,
      page,
      pageSize,
    };
  };

  useEffect(() => {
    const query = getQuery();
    fetchAuditLogs({ collectionUid, documentId, query });
  }, [collectionUid, documentId, searchParams]);

  return {
    auditLogs,
    auditLogsLoading,
    auditLogsMeta,
  };
}
