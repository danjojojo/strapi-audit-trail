import { Field } from '../ui/Field';
import { RenderField } from '../detail/RenderField';
import { SingleComponent } from './base/CompSingle';
import { RepeatableComponent } from './base/CompRepeatable';
import { useAuditLogsContext } from '../../providers/audit-logs.provider';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { SchemaContent, SettingsContent } from '../../types/container.types';

interface ComponentProps {
  label: string;
  value: any;
  schema: SchemaContent;
  settings: SettingsContent;
}

export function Component({ label, value, schema, settings }: ComponentProps) {
  const { auditLog } = useAuditLogsContext();

  if (!auditLog) return null;

  const componentsSchema = JSON.parse(auditLog.componentsSchema);
  const componentsLayout = JSON.parse(auditLog.componentsLayout);

  const containers = getContainers({
    layout: JSON.stringify(componentsLayout?.[schema.component!]),
    schema: JSON.stringify(componentsSchema?.[schema.component!]),
  });

  if (schema.repeatable) {
    return (
      <Field label={`${label} (${value?.length})`} paddingBottom="8px">
        <RepeatableComponent
          value={value}
          containers={containers}
          renderTitle={(value) => value?.[settings?.mainField!]}
          renderFields={(field, value) => (
            <RenderField
              label={field.label}
              type={field.schema.type}
              value={value?.[field.id]}
              metadata={field.metadata}
              schema={field.schema}
              settings={settings}
            />
          )}
        />
      </Field>
    );
  }

  return (
    <Field label={label} paddingBottom="8px">
      <SingleComponent
        containers={containers}
        renderFields={(field) => (
          <RenderField
            label={field.label}
            type={field.schema.type}
            value={value?.[field.id]}
            metadata={field.metadata}
            schema={field.schema}
            settings={settings}
          />
        )}
      />
    </Field>
  );
}
