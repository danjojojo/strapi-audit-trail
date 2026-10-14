import { Field as StrapiField } from '@strapi/design-system';
import type { FieldProps } from '../../types/fields.types';

export function Field({ label, children, paddingBottom, type, value }: FieldProps) {
  return (
    <StrapiField.Root width="100%">
      <StrapiField.Label paddingBottom={paddingBottom ?? undefined}>{label}</StrapiField.Label>
      {children ? children : <StrapiField.Input type={type} placeholder={value} disabled />}
    </StrapiField.Root>
  );
}
