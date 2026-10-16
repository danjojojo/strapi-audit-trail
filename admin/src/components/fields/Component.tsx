import { Field, Box, Flex, Accordion } from '@strapi/design-system';
import { styled } from 'styled-components';
import { RenderField } from '../detail/RenderField';
import { getContainers } from '../../helpers/document-view/container-renderer';
import type { SettingsContent } from '../../types/container.types';

interface ComponentProps {
  label: string;
  value: any;
  usedComponent: string;
  componentSchema: string;
  componentLayout: string;
  isRepeatable: boolean;
  settings: SettingsContent;
}

const GridRow = styled(Box)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spaces[5]};
  width: 100%;
`;

const GridItem = styled(Box)<{ $size: number }>`
  grid-column: span ${({ $size }) => Math.min(Math.max($size, 1), 12)};
  min-width: 0;
`;

export function Component({
  label,
  value,
  usedComponent,
  componentSchema,
  componentLayout,
  isRepeatable,
  settings,
}: ComponentProps) {
  const schema = JSON.parse(componentSchema);
  const layout = JSON.parse(componentLayout);

  const containers = getContainers({
    layout: JSON.stringify(layout?.[usedComponent]),
    schema: JSON.stringify(schema?.[usedComponent]),
  });

  if (isRepeatable) {
    return (
      <Field.Root width="100%">
        <Field.Label paddingBottom="8px">{`${label} (${value?.length})`}</Field.Label>
        <Accordion.Root>
          {value.map((v: any, idx: number) => {
            return containers?.map((c) => (
              <Accordion.Item value={`${idx}`} key={idx}>
                <Accordion.Header>
                  <Accordion.Trigger description="Your personal information">
                    {v?.[settings?.mainField!] ?? null}
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <Flex
                    direction="column"
                    background="neutral100"
                    width="100%"
                    height="100%"
                    padding="24px"
                    gap="20px"
                  >
                    {c.fields.map((field, idx) => (
                      <GridRow key={idx}>
                        {field.map((f) => (
                          <GridItem key={f.id} $size={f.schema.type === 'boolean' ? 3 : f.size}>
                            <RenderField
                              label={f.label}
                              type={f.schema.type}
                              value={v?.[f.id]}
                              metadata={f.metadata}
                              schema={f.schema}
                              componentSchema={componentSchema}
                              componentLayout={componentLayout}
                              settings={settings}
                              key={idx}
                            />
                          </GridItem>
                        ))}
                      </GridRow>
                    ))}
                  </Flex>
                </Accordion.Content>
              </Accordion.Item>
            ));
          })}
        </Accordion.Root>
      </Field.Root>
    );
  }

  return (
    <Field.Root width="100%">
      <Field.Label paddingBottom="8px">{label}</Field.Label>
      {containers?.map((container, idx) => {
        return (
          <Flex
            key={idx}
            direction="column"
            background="neutral100"
            width="100%"
            height="100%"
            padding="24px"
            gap="20px"
          >
            {container.fields.map((field, idx) => (
              <GridRow key={idx}>
                {field.map((f) => (
                  <GridItem key={f.id} $size={f.schema.type === 'boolean' ? 3 : f.size}>
                    <RenderField
                      label={f.label}
                      type={f.schema.type}
                      value={value?.[f.id]}
                      metadata={f.metadata}
                      schema={f.schema}
                      componentSchema={componentSchema}
                      componentLayout={componentLayout}
                      settings={settings}
                    />
                  </GridItem>
                ))}
              </GridRow>
            ))}
          </Flex>
        );
      })}
    </Field.Root>
  );
}
