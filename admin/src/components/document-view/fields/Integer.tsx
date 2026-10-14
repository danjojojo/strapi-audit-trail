import { Field } from '../../../components/ui/Field';
import type { InputFieldProps } from '../../../types/fields.types';

export function Integer({ label, value }: InputFieldProps) {
  return <Field label={label} type="number" value={value} />;
}
