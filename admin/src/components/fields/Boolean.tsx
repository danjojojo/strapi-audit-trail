import { Toggle } from '@strapi/design-system';
import { Field } from '../ui/Field';
import type { BooleanProps } from '../../types/fields.types';

export function Boolean({ label, value, schema }: BooleanProps) {
  return (
    <Field label={label} required={schema.required}>
      <Toggle checked={value ? true : false} disabled={true} onLabel="True" offLabel="False" />
    </Field>
  );
}
