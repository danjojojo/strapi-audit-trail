import { GridFour } from '@strapi/icons';
import { FieldLayout } from '../../styled/FieldLayout';
import { Flex, Box, Accordion } from '@strapi/design-system';
import type { DynamiczoneComponentProps } from '../../../types/fields.types';

export function DynamiczoneComponent({
  value,
  renderTitle,
  renderContainers,
  renderFields,
}: DynamiczoneComponentProps) {
  return (
    <Flex width="100%" justifyContent="center" alignItems="stretch" direction="column">
      {value.map((v, idx) => {
        const containers = renderContainers(v);
        return (
          <Box key={idx}>
            <FieldLayout.Spacer />
            <Accordion.Root>
              {containers?.map((container) => (
                <Accordion.Item value={`${idx}`} key={idx} width="100%">
                  <Accordion.Header icon={GridFour}>
                    <Accordion.Trigger description={renderTitle(v, container)}>
                      {renderTitle(v, container) ?? null}
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content>
                    <FieldLayout.Container $backgroundColor="neutral0">
                      {container.fields.map((fields, idx) => (
                        <FieldLayout.Row key={idx}>
                          {fields.map((field, idx) => (
                            <FieldLayout.RowItem key={idx} $size={field.size}>
                              {renderFields(field, v)}
                            </FieldLayout.RowItem>
                          ))}
                        </FieldLayout.Row>
                      ))}
                    </FieldLayout.Container>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Box>
        );
      })}
    </Flex>
  );
}
