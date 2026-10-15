import { Pill } from '../ui/Pill';
import { Flex } from '@strapi/design-system';
import { GridRow, GridItem } from '../ui/Grid';
import { NormalContainer } from '../ui/Container';
import { DocumentViewField } from './DocumentViewField';
import { DynamicZoneComponent } from './fields/DynamicZoneComponent';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { GetAuditLogResponse } from '../../types/service.types';

export function DocumentView({ data }: { data: GetAuditLogResponse['auditLog'] }) {
  const containers = getContainers({
    layout: data.documentLayout,
    schema: data.documentSchema,
  });

  const payload = JSON.parse(data.payload);

  if (!containers) return null;

  return (
    <Flex direction="column" alignItems="flex-start" gap="32px" width="100%">
      {containers.map((container, idx) => {
        if (container.type === 'normal') {
          return (
            <NormalContainer key={idx}>
              {container.fields.map((field, idx) => (
                <GridRow key={idx}>
                  {field.map((f) => (
                    <GridItem key={f.id} $size={f.schema.type === 'boolean' ? 3 : f.size}>
                      <DocumentViewField
                        label={f.label}
                        schema={f.schema}
                        type={f.schema.type}
                        metadata={f.metadata}
                        settings={f.settings}
                        value={payload?.[f.id]}
                        componentSchema={data.componentsSchema}
                        componentLayout={data.componentsLayout}
                      />
                    </GridItem>
                  ))}
                </GridRow>
              ))}
            </NormalContainer>
          );
        }

        if (container.type === 'dynamiczone') {
          const payloadId = container.fields[0][0]?.id;
          const dynamiczoneData = payload?.[payloadId] as any[];

          console.log({ dynamiczoneData });

          return (
            <Flex
              key={idx}
              direction="column"
              background="neutral100"
              hasRadius={true}
              justifyContent="center"
              width="100%"
              height="100%"
            >
              <Pill
                value={`${container.fields[0][0]?.label}${dynamiczoneData.length > 0 ? ` (${dynamiczoneData.length})` : ''}`}
              />
              <DynamicZoneComponent
                value={dynamiczoneData}
                componentSchema={data.componentsSchema}
                componentLayout={data.componentsLayout}
                componentNames={data.componentsNames}
              />
            </Flex>
          );
        }
      })}
    </Flex>
  );
}
