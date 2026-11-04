import { styled } from 'styled-components';
import { Field as StrapiField, Typography } from '@strapi/design-system';
import type { FieldProps } from '../../types/fields.types';

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
      {children ? (
        children
      ) : (
        <ReadOnlyInput
          type={type}
          placeholder={value ?? 'No available data.'}
          readOnly
          value={value ?? 'No available data.'}
        />
      )}
    </StrapiField.Root>
  );
}

const ReadOnlyInput = styled(StrapiField.Input)`
  background: ${({ theme }) => theme.colors.neutral150};

  input {
    color: ${({ theme }) => theme.colors.neutral600};
    cursor: text;
  }
`;
