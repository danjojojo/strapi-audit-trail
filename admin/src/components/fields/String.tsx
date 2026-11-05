import { memo } from 'react';
import { Field } from '../ui/Field';
import type { InputFieldProps } from '../../types/fields.types';

function StringBase({ label, value, schema }: InputFieldProps) {
  return (
    <Field
      label={label}
      type="text"
      value={value ?? ''}
      required={schema.required}
    />
  );
}

export const String = memo(StringBase);
