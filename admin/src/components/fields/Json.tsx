import { Field } from '../ui/Field';
import { JSONInput } from '@strapi/design-system';
import type { InputFieldProps } from '../../types/fields.types';

export function Json({ label, value }: InputFieldProps) {
  return (
    <Field label={label}>
      <JSONInput
        aria-label={label}
        value={JSON.stringify(value, null, 3)}
        height="250.4px"
        disabled
      />
    </Field>
  );
}
