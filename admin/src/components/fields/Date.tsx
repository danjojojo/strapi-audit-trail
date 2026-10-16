import {
  DateTimePicker as SDateTimePicker,
  DatePicker as SDatePicker,
  TimePicker as STimePicker,
} from '@strapi/design-system';
import { Field } from '../ui/Field';
import { getDate, getTime } from '../../helpers/audit-logs-formatters';
import type { InputFieldProps } from '../../types/fields.types';

export const DateTimePicker = ({ label, value }: InputFieldProps) => {
  return (
    <Field label={label}>
      <SDateTimePicker initialDate={getDate(value)} disabled />
    </Field>
  );
};

export const DatePicker = ({ label, value }: InputFieldProps) => {
  return (
    <Field label={label}>
      <SDatePicker initialDate={getDate(value)} disabled />
    </Field>
  );
};

export const TimePicker = ({ label, value }: InputFieldProps) => {
  return (
    <Field label={label}>
      <STimePicker value={getTime(value)} disabled />
    </Field>
  );
};

export const Date = {
  DateTimePicker,
  DatePicker,
  TimePicker,
};
