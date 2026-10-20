import { FieldLayout } from '../../styled/FieldLayout';
import { Accordion } from '@strapi/design-system';
import type { RepeatableComponentProps } from '../../../types/fields.types';

export function RepeatableComponent({
  value,
  containers,
  renderTitle,
  renderFields,
}: RepeatableComponentProps) {
  return (
    <Accordion.Root>
      {value.map((v, idx) => {
        return containers?.map((container) => (
          <Accordion.Item value={`${idx}`} key={idx}>
            <Accordion.Header>
              <Accordion.Trigger description={renderTitle(v)}>
                {renderTitle(v) ?? null}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <FieldLayout.Container>
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
        ));
      })}
    </Accordion.Root>
  );
}
