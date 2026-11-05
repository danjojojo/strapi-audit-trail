import { memo, useMemo } from 'react';
import { Field } from '../ui/Field';
import { EmptyComponent } from './base/CompEmpty';
import { RenderField } from '../detail/RenderField';
import { SingleComponent } from './base/CompSingle';
import { RepeatableComponent } from './base/CompRepeatable';
import { useAuditLogsContext } from '../../providers/audit-logs.provider';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { ComponentProps } from '../../types/fields.types';

function ComponentBase({ label, value, schema, settings }: ComponentProps) {
  const { auditLog } = useAuditLogsContext();

  const componentsSchemaRaw = auditLog?.componentsSchema;
  const componentsLayoutRaw = auditLog?.componentsLayout;

  const componentsSchema = useMemo(
    () => (componentsSchemaRaw ? JSON.parse(componentsSchemaRaw) : null),
    [componentsSchemaRaw]
  );
  const componentsLayout = useMemo(
    () => (componentsLayoutRaw ? JSON.parse(componentsLayoutRaw) : null),
    [componentsLayoutRaw]
  );

  const containers = useMemo(
    () =>
      getContainers({
        layout: JSON.stringify(componentsLayout?.[schema.component!]),
        schema: JSON.stringify(componentsSchema?.[schema.component!]),
      }),
    [componentsLayout, componentsSchema, schema.component]
  );

  if (!auditLog) return null;

  if (!value || value.length === 0) {
    return (
      <Field label={label} paddingBottom="8px" required={schema.required}>
        <EmptyComponent />
      </Field>
    );
  }

  if (schema.repeatable) {
    return (
      <Field label={`${label} (${value?.length})`} paddingBottom="8px" required={schema.required}>
        <RepeatableComponent
          value={value}
          containers={containers}
          renderTitle={(value, container) =>
            value?.[settings?.mainField!] ?? value?.[container.fields[0][0].settings?.mainField!]
          }
          renderFields={(field, value) => {
            const settings = componentsLayout?.[field?.schema?.component!]?.settings ?? null;
            return (
              <RenderField
                label={field.label}
                type={field.schema.type}
                value={value?.[field.id]}
                metadata={field.metadata}
                schema={field.schema}
                settings={settings}
              />
            );
          }}
        />
      </Field>
    );
  }

  return (
    <Field label={label} paddingBottom="8px" required={schema.required}>
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

export const Component = memo(ComponentBase);
