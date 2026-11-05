import { memo } from 'react';
import { Field } from '../ui/Field';
import { BlocksDetailView } from '../blocks/BlocksDetailView';
import type { InputFieldProps } from '../../types/fields.types';

function BlocksBase({ label, value, schema }: InputFieldProps) {
  return (
    <Field label={label} required={schema.required}>
      <BlocksDetailView value={value} />
    </Field>
  );
}

export const Blocks = memo(BlocksBase);
