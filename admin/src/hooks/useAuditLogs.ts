import { services } from '../services';
import { useRouting } from './useRouting';
import { useEffect, useState } from 'react';
import { stringToNumber } from '../utils/numbers';
import { getResponseStatus } from '../helpers/response-status';
import { getActionFrom } from '../helpers/audit-logs-formatters';
import type {
  GetAuditLogsResponse,
  GetAuditLogs,
  GetAuditLogResponse,
  GetAuditLog,
  ResponseStatus,
} from '../types/service.types';

export function useAuditLogs() {
  const { getAuditLogs, getAuditLog } = services();
  const { collectionUid, documentId, searchParams } = useRouting();

  // FOR LISTING PAGE
  const [auditLogs, setAuditLogs] = useState<GetAuditLogsResponse['data']>([]);
  const [auditLogsLoading, setAuditLogsLoading] = useState<boolean>(true);
  const [auditLogsError, setAuditLogsError] = useState<ResponseStatus>('none');
  const [auditLogsMeta, setAuditLogsMeta] = useState<GetAuditLogsResponse['meta']>();

  // FOR DETAIL PAGE
  const [auditLog, setAuditLog] = useState<GetAuditLogResponse['auditLog']>();
  const [auditLogLoading, setAuditLogLoading] = useState<boolean>(true);
  const [auditLogError, setAuditLogError] = useState<ResponseStatus>('none');
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

      if (typeof res === 'number') {
        setAuditLogsError(getResponseStatus(res));
        return;
      }

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

      setAuditLogsError('none');
    } catch (error) {
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

      if (typeof res === 'number') {
        setAuditLogError(getResponseStatus(res));
        return;
      }

      if (res?.auditLog) {
        setAuditLog(res.auditLog);
      }

      if (res?.relatedLogs) {
        setRelatedLogs(res.relatedLogs);
      }

      setAuditLogError('none');
    } catch (error) {
      console.error(error);
    } finally {
      setAuditLogLoading(false);
      return;
    }
  };

  useEffect(() => {
    const q = getQuery();

    if (documentId) {
      fetchAuditLog({
        collectionUid,
        documentId,
        query: { action: q.action, createdAt: q.createdAt },
      });
    } else {
      fetchAuditLogs({ collectionUid, query: q });
    }
  }, [collectionUid, documentId, searchParams]);

  return {
    auditLogs,
    auditLogsLoading,
    auditLogsError,
    auditLogsMeta,

    auditLog,
    auditLogLoading,
    auditLogError,
    relatedLogs,
  };
}
