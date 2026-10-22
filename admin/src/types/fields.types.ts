import type { GetContainersResult } from './container.types';
import type { MetadataContent, SchemaContent, SettingsContent } from './container.types';

/** BASE FIELD */
export interface FieldProps {
  label: string;
  children?: React.ReactNode;
  paddingBottom?: string;
  type?: string;
  value?: any;
}

/** BOOLEAN FIELD */
export interface BooleanProps {
  label: string;
  value: string;
}

/** RELATION FIELD */
export interface RelationProps {
  label: string;
  value: any;
  metadata: MetadataContent;
}

export interface RelationButton {
  value: string;
}

export interface ScrollableRelationButtons {
  itemsLength: number;
  children: React.ReactNode;
}

/** MEDIA FIELD */
export interface MediaProps {
  label: string;
  value: any;
}

/** INPUT FIELD */
export interface InputFieldProps {
  label: string;
  value: any;
}

/** DOCUMENT VIEW FIELD */
export interface RenderFieldProps {
  label: string;
  type: string;
  value: any;
  schema: SchemaContent;
  metadata: MetadataContent;
  settings: SettingsContent;
}

/** DYNAMIC ZONE PROPS */
export interface DynamiczoneProps {
  value: any[];
}

/** COMPONENT PROPS */
export interface ComponentProps {
  label: string;
  value: any | any[];
  schema: SchemaContent;
  settings: SettingsContent;
}

/** SINGLE COMPONENT PROPS */
export interface SingleComponentProps {
  containers: GetContainersResult[] | null;
  renderFields: (fields: GetContainersResult['fields'][number][number]) => React.JSX.Element;
}

/** REPEATABLE COMPONENT PROPS */
export interface RepeatableComponentProps {
  containers: GetContainersResult[] | null;
  value: any[];
  renderTitle: (value: any, container: GetContainersResult) => string | null;
  renderFields: (
    fields: GetContainersResult['fields'][number][number],
    value: any
  ) => React.JSX.Element;
}

/** DYNAMIC ZONE COMPONENT PROPS */
export interface DynamiczoneComponentProps {
  value: any[];
  renderTitle: (value: any, container: GetContainersResult) => string | null;
  renderContainers: (value: any) => GetContainersResult[] | null;
  renderFields: (
    fields: GetContainersResult['fields'][number][number],
    value: any
  ) => React.JSX.Element;
}
