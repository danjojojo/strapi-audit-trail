import { memo } from 'react';
import { Field } from '../ui/Field';
import { MarkdownDetailView } from '../markdown/MarkdownDetailView';
import type { InputFieldProps } from '../../types/fields.types';

function MarkdownBase({ label, value, schema }: InputFieldProps) {
  return (
    <Field label={label} required={schema.required}>
      <MarkdownDetailView value={value} />
    </Field>
  );
}

export const Markdown = memo(MarkdownBase);
