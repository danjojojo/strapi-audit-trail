import { useEffect, useState } from 'react';
import { services } from '../services';
import { useRouting } from './useRouting';
import { stringToNumber } from '../utils/numbers';
import { getResponseStatus } from '../helpers/response-status';
import type {
  GetAuditLoginsResponse,
  GetAuditLogins,
  ResponseStatus,
} from '../types/service.types';

export function useAuditLogins() {
  const { getAuditLogins } = services();
  const { collectionKind, collectionUid, searchParams } = useRouting();

  const [auditLogins, setAuditLogins] = useState<GetAuditLoginsResponse['data']>([]);
  const [auditLoginsLoading, setAuditLoginsLoading] = useState<boolean>(true);
  const [auditLoginsError, setAuditLoginsError] = useState<ResponseStatus>('none');
  const [auditLoginsMeta, setAuditLoginsMeta] = useState<GetAuditLoginsResponse['meta']>();

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

  const fetchAuditLogins = async ({ query }: GetAuditLogins) => {
    try {
      setAuditLoginsLoading(true);

      const res = await getAuditLogins({ query });

      if (typeof res === 'number') {
        setAuditLoginsError(getResponseStatus(res));
        return;
      }

      if (res?.data) {
        setAuditLogins(res.data);
      }

      if (res?.meta) {
        setAuditLoginsMeta(res.meta);
      }

      setAuditLoginsError('none');
    } catch (error) {
      console.error(error);
    } finally {
      setAuditLoginsLoading(false);
      return;
    }
  };

  useEffect(() => {
    const query = getQuery();

    if (collectionKind === 'others' && collectionUid === 'cms-logins') {
      fetchAuditLogins({ query });
    }
  }, [collectionKind, collectionUid, searchParams]);

  return {
    auditLogins,
    auditLoginsError,
    auditLoginsLoading,
    auditLoginsMeta,
  };
}
