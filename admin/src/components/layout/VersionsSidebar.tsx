import { Loader } from '../ui/Loader';
import { ERROR } from '../../constants';
import { Versions } from '../ui/Versions';
import { ErrorState } from '../ui/ErrorState';
import { useVersions } from '../../hooks/useVersions';
import type { VersionsSidebarProps } from '../../types/versions.types';

export function VersionsSidebar({
  logs,
  isLoading,
  isInvalid,
  hasError = false,
}: VersionsSidebarProps) {
  const { replaceParams, currentVersion } = useVersions(logs);

  return (
    <Versions.Sidebar>
      <Versions.SidebarHeader versionsCount={logs?.length} />
      {isLoading ? (
        <Loader />
      ) : isInvalid ? (
        <ErrorState content={ERROR.VERSION.INVALID_LISTING} />
      ) : hasError ? (
        <ErrorState content={ERROR.VERSION.ERROR_LISTING} />
      ) : (
        <Versions.SidebarContent>
          {logs.map((version, index) => (
            <Versions.SidebarButton
              key={index}
              version={version}
              isCurrent={index === 0}
              onClick={() =>
                replaceParams({ action: version.action, createdAt: version.createdAt })
              }
              active={
                currentVersion?.action === version.action &&
                currentVersion?.createdAt === version.createdAt
              }
            />
          ))}
        </Versions.SidebarContent>
      )}
    </Versions.Sidebar>
  );
}
