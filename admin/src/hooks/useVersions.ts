import { useRouting } from './useRouting';
import { useEffect, useState } from 'react';
import type { Version } from '../types/versions.types';
import type { AuditLogsData } from '../types/service.types';

export function useVersions(logs: AuditLogsData[]) {
  const { appendParam, searchParams } = useRouting();
  const [currentVersion, setCurrentVersion] = useState<Version>();

  useEffect(() => {
    if (logs.length === 0) return;

    const action = searchParams.get('action');
    const createdAt = searchParams.get('createdAt');

    if (!action || !createdAt) {
      setCurrentVersion({
        action: logs[0].action,
        createdAt: logs[0].createdAt,
      });
      return;
    } else {
      setCurrentVersion({
        action,
        createdAt,
      });
      return;
    }
  }, [logs, searchParams]);

  return {
    appendParam,
    currentVersion,
  };
}
