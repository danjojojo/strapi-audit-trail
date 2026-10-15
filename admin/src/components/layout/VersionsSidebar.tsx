import { Loader } from '../ui/Loader';
import { Versions } from '../ui/Versions';
import { ErrorState } from '../ui/ErrorState';
import { useVersions } from '../../hooks/useVersions';
import type { VersionsSidebarProps } from 'src/types/versions.types';

export function VersionsSidebar({ logs, isLoading, hasError = false }: VersionsSidebarProps) {
  const { appendParam, currentVersion } = useVersions(logs);

  return (
    <Versions.Sidebar>
      <Versions.SidebarHeader versionsCount={logs?.length} />
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <ErrorState />
      ) : (
        <Versions.SidebarContent>
          {logs.map((version, index) => (
            <Versions.SidebarButton
              key={index}
              version={version}
              isCurrent={index === 0}
              onClick={() => {
                appendParam('action', version.action);
                appendParam('createdAt', version.createdAt);
              }}
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
