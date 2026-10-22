import { Field } from '../ui/Field';
import { BlocksDetailView } from '../blocks/BlocksDetailView';
import type { InputFieldProps } from '../../types/fields.types';

export function Blocks({ label, value, schema }: InputFieldProps) {
  return (
    <Field label={label} required={schema.required}>
      <BlocksDetailView value={value} />
    </Field>
  );
}
