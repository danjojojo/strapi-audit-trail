import { memo } from 'react';
import { Field } from '../ui/Field';
import type { InputFieldProps } from '../../types/fields.types';

function IntegerBase({ label, value, schema }: InputFieldProps) {
  return <Field label={label} type="number" value={value ?? ''} required={schema.required} />;
}

export const Integer = memo(IntegerBase);
