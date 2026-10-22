import { Field as StrapiField } from '@strapi/design-system';
import type { FieldProps } from '../../types/fields.types';
import { Typography } from '@strapi/design-system';

export function Field({
  label,
  children,
  paddingBottom,
  type,
  value,
  required = false,
}: FieldProps) {
  return (
    <StrapiField.Root width="100%">
      <StrapiField.Label paddingBottom={paddingBottom ?? undefined}>
        {label}
        {required && (
          <Typography variant="pi" textColor="danger700">
            *
          </Typography>
        )}
      </StrapiField.Label>
      {children ? children : <StrapiField.Input type={type} placeholder={value} disabled />}
    </StrapiField.Root>
  );
}
