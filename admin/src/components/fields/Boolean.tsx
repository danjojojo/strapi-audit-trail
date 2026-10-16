import { Toggle } from '@strapi/design-system';
import { Field } from '../ui/Field';
import type { BooleanProps } from '@/types/fields.types';

export function Boolean({ label, value }: BooleanProps) {
  return (
    <Field label={label}>
      <Toggle checked={value ? true : false} disabled={true} onLabel="True" offLabel="False" />
    </Field>
  );
}
