import { RenderField } from '../detail/RenderField';
import { DynamiczoneComponent } from './base/CompDynamiczone';
import { useAuditLogsContext } from '../../providers/audit-logs.provider';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { DynamiczoneProps } from '../../types/fields.types';

export function Dynamiczone({ value }: DynamiczoneProps) {
  const { auditLog } = useAuditLogsContext();

  if (!auditLog) return null;

  const parsed = {
    layout: JSON.parse(auditLog.componentsLayout),
    schema: JSON.parse(auditLog.componentsSchema),
    componentNames: JSON.parse(auditLog.componentsNames),
  };

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
