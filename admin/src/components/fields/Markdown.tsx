import { Field } from '../ui/Field';
import { MarkdownDetailView } from '../markdown/MarkdownDetailView';
import type { InputFieldProps } from '../../types/fields.types';

export function Markdown({ label, value, schema }: InputFieldProps) {
  const customField = schema?.customField;

  console.log({ customField });
  
  return (
    <Field label={label} required={schema.required}>
      <MarkdownDetailView value={value} />
    </Field>
  );
}
