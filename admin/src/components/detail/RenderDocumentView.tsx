import { Pill } from '../ui/Pill';
import { Container } from '../ui/Container';
import { RenderField } from './RenderField';
import { Flex } from '@strapi/design-system';
import { Dynamiczone } from '../fields/Dynamiczone';
import { AuditLogsProvider } from '../../providers/audit-logs.provider';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { GetAuditLogResponse } from '../../types/service.types';

export function RenderDocumentView({ data }: { data: GetAuditLogResponse['auditLog'] }) {
  const containers = getContainers({
    layout: data.documentLayout,
    schema: data.documentSchema,
  });

  const payload = JSON.parse(data.payload);

  if (!containers) return null;

  return (
    <AuditLogsProvider>
      <Flex direction="column" alignItems="flex-start" gap="32px" width="100%">
        {containers.map((container, idx) => {
          if (container.type === 'normal') {
            return (
              <Container.Default
                key={idx}
                container={container}
                renderFields={(field) => (
                  <RenderField
                    label={field.label}
                    schema={field.schema}
                    type={field.schema.type}
                    metadata={field.metadata}
                    settings={field.settings}
                    value={payload?.[field.id]}
                  />
                )}
              />
            );
          }

          if (container.type === 'dynamiczone') {
            const dynamiczone = container.fields[0][0];
            const dynamiczoneId = dynamiczone?.id;
            const dynamiczoneData = payload?.[dynamiczoneId];
            const dynamiczoneLength = dynamiczoneData.length;
            const dynamiczoneTitle = `${dynamiczone?.label} (${dynamiczoneLength})`;

            return (
              <Container.Dynamiczone key={idx}>
                <Pill value={dynamiczoneTitle} />
                <Dynamiczone value={dynamiczoneData} />
              </Container.Dynamiczone>
            );
          }
        })}
      </Flex>
    </AuditLogsProvider>
  );
}
