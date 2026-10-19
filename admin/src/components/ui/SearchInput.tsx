import { styled } from 'styled-components';
import { Search, Cross } from '@strapi/icons';
import { Field } from '@strapi/design-system';
import type { SearchInputProps } from '../../types/ui.types';

const FieldInput = styled(Field.Input)`
  padding-inline-start: 8px !important;
`;

export function SearchInput({ value, wipeAction, onChangeAction, size = 'S' }: SearchInputProps) {
  return (
    <Field.Root>
      <FieldInput
        placeholder="Search"
        size={size}
        type="text"
        value={value}
        startAction={<Search />}
        endAction={value && <Cross onClick={wipeAction} style={{ cursor: 'pointer' }} />}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeAction(e.target.value)}
      />
    </Field.Root>
  );
}
