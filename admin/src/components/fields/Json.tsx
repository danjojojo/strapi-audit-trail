import { memo } from 'react';
import { Field } from '../ui/Field';
import { JSONInput } from '@strapi/design-system';
import type { InputFieldProps } from '../../types/fields.types';

function JsonBase({ label, value, schema }: InputFieldProps) {
  return (
    <Field label={label} required={schema.required}>
      <JSONInput
        aria-label={label}
        value={JSON.stringify(value, null, 3)}
        height="250.4px"
        disabled
      />
    </Field>
  );
}

export const Json = memo(JsonBase);
