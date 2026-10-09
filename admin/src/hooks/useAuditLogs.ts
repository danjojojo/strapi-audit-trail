import { services } from '../services';
import { useRouting } from './useRouting';
import { useEffect, useState } from 'react';
import { stringToNumber } from '../utils/numbers';
import { getActionFrom } from '../helpers/audit-logs-formatters';
import type {
  GetAuditLogsResponse,
  GetAuditLogs,
  GetAuditLogResponse,
  GetAuditLog,
} from '../types/service.types';

export function useAuditLogs() {
  const { getAuditLogs, getAuditLog } = services();
  const { collectionUid, documentId, searchParams } = useRouting();

  // FOR LISTING PAGE
  const [auditLogs, setAuditLogs] = useState<GetAuditLogsResponse['data']>([]);
  const [auditLogsLoading, setAuditLogsLoading] = useState<boolean>(true);
  const [auditLogsMeta, setAuditLogsMeta] = useState<GetAuditLogsResponse['meta']>();

  // FOR DETAIL PAGE
  const [auditLog, setAuditLog] = useState<GetAuditLogResponse['auditLog']>();
  const [auditLogLoading, setAuditLogLoading] = useState<boolean>(true);
  const [relatedLogs, setRelatedLogs] = useState<GetAuditLogResponse['relatedLogs']>([]);

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
    const action = searchParams.get('action') ?? undefined;
    const createdAt = searchParams.get('createdAt') ?? undefined;

    return {
      _q,
      sort,
      page,
      pageSize,
      action,
      createdAt,
    };
  };

  const fetchAuditLogs = async ({ collectionUid, query }: GetAuditLogs) => {
    try {
      setAuditLogsLoading(true);

      const res = await getAuditLogs({ collectionUid, query });

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

  const fetchAuditLog = async ({ collectionUid, documentId, query }: GetAuditLog) => {
    try {
      setAuditLogLoading(true);

      const res = await getAuditLog({ collectionUid, documentId, query });

      if (res?.auditLog) {
        setAuditLog(res.auditLog);
      }

      if (res?.relatedLogs) {
        setRelatedLogs(res.relatedLogs);
      }
    } catch (error) {
      setAuditLogLoading(false);
      console.error(error);
    } finally {
      setAuditLogLoading(false);
      return;
    }
  };

  useEffect(() => {
    const query = getQuery();

    if (documentId) {
      fetchAuditLog({ collectionUid, documentId, query });
    } else {
      fetchAuditLogs({ collectionUid, query });
    }
  }, [collectionUid, documentId, searchParams]);

  return {
    auditLogs,
    auditLogsLoading,
    auditLogsMeta,

    auditLog,
    auditLogLoading,
    relatedLogs,
  };
}
