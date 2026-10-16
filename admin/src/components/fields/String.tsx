import { Field } from '../ui/Field';
import type { InputFieldProps } from '../../types/fields.types';

export function String({ label, value }: InputFieldProps) {
  return <Field label={label} type="text" value={value} />;
}
