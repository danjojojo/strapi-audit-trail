import { memo } from 'react';
import { Field } from '../ui/Field';
import { Toggle } from '@strapi/design-system';
import type { BooleanProps } from '../../types/fields.types';

function BooleanBase({ label, value, schema }: BooleanProps) {
  return (
    <Field label={label} required={schema.required}>
      <Toggle checked={value ?? null} disabled={true} onLabel="True" offLabel="False" />
    </Field>
  );
}

export const Boolean = memo(BooleanBase);
