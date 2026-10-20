import { FieldLayout } from '../../styled/FieldLayout';
import type { SingleComponentProps } from '../../../types/fields.types';

export function SingleComponent({ containers, renderFields }: SingleComponentProps) {
  return containers?.map((container, idx) => (
    <FieldLayout.Container key={idx}>
      {container.fields.map((fields, idx) => (
        <FieldLayout.Row key={idx}>
          {fields.map((field, idx) => (
            <FieldLayout.RowItem key={idx} $size={field.size}>
              {renderFields(field)}
            </FieldLayout.RowItem>
          ))}
        </FieldLayout.Row>
      ))}
    </FieldLayout.Container>
  ));
}
