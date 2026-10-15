import { ACTION_COLORS } from '../constants';
import type { AuditLogsData } from './service.types';

export interface VersionsSidebarProps {
  logs: AuditLogsData[];
  isLoading: boolean;
  isInvalid?: boolean;
  hasError?: boolean;
}

export interface Version {
  action: string;
  createdAt: string;
}

export interface VersionButtonProps {
  onClick: () => void;
  version: AuditLogsData;
  isCurrent: boolean;
  active: boolean;
}
