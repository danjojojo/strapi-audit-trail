import { Field } from '../ui/Field';
import { BlocksDetailView } from '../blocks/BlocksDetailView';
import type { InputFieldProps } from '../../types/fields.types';

export function Blocks({ label, value }: InputFieldProps) {
  return (
    <Field label={label}>
      <BlocksDetailView value={value} />
    </Field>
  );
}
