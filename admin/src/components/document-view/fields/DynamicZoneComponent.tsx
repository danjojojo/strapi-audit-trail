import { Accordion, Flex, Box } from '@strapi/design-system';
import { DocumentViewField } from '../DocumentViewField';
import { GridFour } from '@strapi/icons';
import { GridRow, GridItem } from '../../../components/ui/Grid';
import { getContainers } from '../../../helpers/document-view/container-renderer';
import type { DynamicZoneComponentProps } from '../../../types/fields.types';
import { styled } from 'styled-components';

const StyledBox = styled(Box)`
  margin: 0 auto;
`;

export function DynamicZoneComponent({
  value,
  componentLayout,
  componentSchema,
  componentNames,
}: DynamicZoneComponentProps) {
  const parsed = {
    layout: JSON.parse(componentLayout),
    schema: JSON.parse(componentSchema),
    componentNames: JSON.parse(componentNames),
  };

  return (
    <Flex width="100%" justifyContent="center" alignItems="stretch" direction="column">
      {value.map((v: any, idx: number) => {
        const containers = getContainers({
          layout: JSON.stringify(parsed.layout?.[v.__component]),
          schema: JSON.stringify(parsed.schema?.[v.__component]),
        });
        console.log({ containers });

        return (
          <>
            <StyledBox width="8px" height="16px" background="neutral200" />
            <Accordion.Root key={idx} width="100%">
              {containers?.map((c) => (
                <Accordion.Item value={`${idx}`} key={idx} width="100%">
                  <Accordion.Header width="100%">
                    <Accordion.Trigger
                      icon={GridFour}
                      description="Your personal information"
                      width="100%"
                    >
                      {parsed.componentNames?.[v.__component] ?? null}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content width="100%">
                    <Flex
                      direction="column"
                      background="neutral100"
                      width="100%"
                      height="100%"
                      padding="24px"
                      gap="20px"
                    >
                      {c.fields.map((field, idx) => (
                        <GridRow key={idx} width="100%">
                          {field.map((f) => (
                            <GridItem key={f.id} $size={f.schema.type === 'boolean' ? 3 : f.size}>
                              <DocumentViewField
                                label={f.label}
                                type={f.schema.type}
                                value={v?.[f.id]}
                                metadata={f.metadata}
                                schema={f.schema}
                                componentSchema={componentSchema}
                                componentLayout={componentLayout}
                                settings={f.settings}
                                key={idx}
                              />
                            </GridItem>
                          ))}
                        </GridRow>
                      ))}
                    </Flex>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </>
        );
      })}
    </Flex>
  );
}
