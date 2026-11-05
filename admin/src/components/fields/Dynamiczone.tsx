import { useMemo } from 'react';
import { RenderField } from '../detail/RenderField';
import { DynamiczoneComponent } from './base/CompDynamiczone';
import { useAuditLogsContext } from '../../providers/audit-logs.provider';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { DynamiczoneProps } from '../../types/fields.types';

export function Dynamiczone({ value }: DynamiczoneProps) {
  const { auditLog } = useAuditLogsContext();

  const layoutRaw = auditLog?.componentsLayout;
  const schemaRaw = auditLog?.componentsSchema;
  const namesRaw = auditLog?.componentsNames;

  const parsed = useMemo(
    () => ({
      layout: layoutRaw ? JSON.parse(layoutRaw) : null,
      schema: schemaRaw ? JSON.parse(schemaRaw) : null,
      componentNames: namesRaw ? JSON.parse(namesRaw) : null,
    }),
    [layoutRaw, schemaRaw, namesRaw]
  );

  if (!auditLog) return null;

  return (
    <DynamiczoneComponent
      value={value}
      renderContainers={(value) => {
        return getContainers({
          layout: JSON.stringify(parsed.layout?.[value.__component]),
          schema: JSON.stringify(parsed.schema?.[value.__component]),
        });
      }}
      renderTitle={(value, container) => {
        const compName = parsed.componentNames?.[value.__component] ?? null;
        const compMainFieldValue = value?.[container.fields[0][0].settings.mainField!];
        return `${compName}${compMainFieldValue ? ` - ${compMainFieldValue}` : ''}`;
      }}
      renderFields={(field, value) => {
        const settings = parsed.layout?.[field?.schema?.component!]?.settings ?? null;
        return (
          <RenderField
            label={field.label}
            type={field.schema.type}
            value={value?.[field.id]}
            metadata={field.metadata}
            schema={field.schema}
            settings={settings ?? field.settings}
          />
        );
      }}
    />
  );
}
