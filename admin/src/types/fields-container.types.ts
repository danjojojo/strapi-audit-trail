import type { GetContainersResult } from './container.types';

export interface BaseContainerProps {
  children: React.ReactNode;
}

export interface DefaultContainerProps {
  container: GetContainersResult | null;
  renderFields: (fields: GetContainersResult['fields'][number][number]) => React.JSX.Element;
}
