import { Field } from '../ui/Field';
import { Textarea as StrapiTextarea } from '@strapi/design-system';
import type { InputFieldProps } from '../../types/fields.types';

export function Textarea({ label, value }: InputFieldProps) {
  return (
    <Field label={label}>
      <StrapiTextarea placeholder={value ?? 'No content.'} name={label} disabled />
    </Field>
  );
}
