import { Field } from '../ui/Field';
import { Textarea as StrapiTextarea } from '@strapi/design-system';
import type { InputFieldProps } from '../../types/fields.types';

export function Textarea({ label, value, schema }: InputFieldProps) {
  return (
    <Field label={label} required={schema.required}>
      <StrapiTextarea placeholder={value ?? 'No content.'} name={label} disabled />
    </Field>
  );
}
