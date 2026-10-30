import type {
  Layout,
  Schema,
  GetContainersParams,
  GetContainersResult,
} from '../../types/container.types';

export function getContainers(params: GetContainersParams): GetContainersResult[] | null {
  if (!params) return null;
  if (!params.schema || !params.layout) return null;

  const schema = JSON.parse(params.schema) as Schema;
  const layout = JSON.parse(params.layout) as Layout;

  const layouts = layout.layouts.edit;
  const metadatas = layout.metadatas;

  const containers: GetContainersResult[] = [];
  let fields: GetContainersResult['fields'] = [];

  for (let i = 0; i <= layouts.length - 1; i++) {
    const row = layouts[i];

    const rowFields: GetContainersResult['fields'][number] = row.map((field) => {
      const fieldName = field.name;
      const fieldSchema = schema?.[fieldName];
      const fieldSize = field.size;
      const fieldSettings = layout?.settings;
      const fieldLabel = metadatas?.[fieldName]?.list?.label;
      const fieldMetadata = metadatas?.[fieldName];

      return {
        id: fieldName,
        label: fieldLabel,
        size: fieldSize,
        settings: fieldSettings,
        metadata: fieldMetadata,
        schema: fieldSchema,
      };
    });

    const isDynamicZoneRow = row.some((field) => schema?.[field.name]?.type === 'dynamiczone');

    if (!isDynamicZoneRow) {
      fields = [...fields, rowFields];
    } else {
      if (fields.length > 0) {
        containers.push({ type: 'normal', fields });
        fields = [];
      }
      containers.push({ type: 'dynamiczone', fields: [rowFields] });
    }
  }

  if (fields.length > 0) {
    containers.push({ type: 'normal', fields });
  }

  return containers;
}
