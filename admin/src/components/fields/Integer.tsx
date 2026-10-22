import { Field } from '../ui/Field';
import type { InputFieldProps } from '../../types/fields.types';

export function Integer({ label, value, schema }: InputFieldProps) {
  return <Field label={label} type="number" value={value} required={schema.required} />;
}
