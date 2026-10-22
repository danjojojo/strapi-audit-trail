export interface GetContainersParams {
  schema: string | undefined;
  layout: string | undefined;
}

export interface ContainerField {
  id: string;
  label: string;
  size: number;
  settings: SettingsContent;
  metadata: MetadataContent;
  schema: SchemaContent;
}

export interface GetContainersResult {
  type: 'normal' | 'dynamiczone';
  fields: ContainerField[][];
}

export interface FieldLayout {
  name: string;
  size: number;
}

export type SchemaContent = {
  type: string;
  required?: boolean;
  relation?: string;
  component?: string;
  repeatable?: boolean;
  multiple?: boolean;
};

export type SettingsContent = {
  mainField: string | null;
};

export type MetadataContent = {
  edit: {
    mainField?: string | null;
  };
  list: {
    label: string;
  };
};

export type Schema = Record<string, SchemaContent>;
export type Metadatas = Record<string, MetadataContent>;

export interface Layout {
  settings: SettingsContent;
  metadatas: Metadatas;
  layouts: {
    list: string[];
    edit: FieldLayout[][];
  };
}
