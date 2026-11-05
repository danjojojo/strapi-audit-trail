import { memo } from 'react';
import { Field } from '../ui/Field';
import { styled } from 'styled-components';
import { Textarea as StrapiTextarea } from '@strapi/design-system';
import type { InputFieldProps } from '../../types/fields.types';

function TextareaBase({ label, value, schema }: InputFieldProps) {
  return (
    <Field label={label} required={schema.required}>
      <ReadOnlyTextarea placeholder={value ?? ''} name={label} value={value ?? ''} readOnly />
    </Field>
  );
}

export const Textarea = memo(TextareaBase);

const ReadOnlyTextarea = styled(StrapiTextarea)`
  background: ${({ theme }) => theme.colors.neutral150};
  color: ${({ theme }) => theme.colors.neutral600} !important;
  cursor: text;
`;
