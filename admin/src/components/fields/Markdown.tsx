import { Field } from '../ui/Field';
import { MarkdownDetailView } from '../markdown/MarkdownDetailView';
import type { InputFieldProps } from '../../types/fields.types';

export function Markdown({ label, value }: InputFieldProps) {
  return (
    <Field label={label}>
      <MarkdownDetailView value={value} />
    </Field>
  );
}
