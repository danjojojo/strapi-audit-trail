import {
  DateTimePicker as SDateTimePicker,
  DatePicker as SDatePicker,
  TimePicker as STimePicker,
} from '@strapi/design-system';
import { memo } from 'react';
import { Field } from '../ui/Field';
import { getDate, getTime } from '../../helpers/audit-logs-formatters';
import type { InputFieldProps } from '../../types/fields.types';

const DateTimePickerBase = ({ label, value, schema }: InputFieldProps) => {
  return (
    <Field label={label} required={schema.required}>
      <SDateTimePicker initialDate={getDate(value)} disabled />
    </Field>
  );
};

export const DateTimePicker = memo(DateTimePickerBase);

const DatePickerBase = ({ label, value, schema }: InputFieldProps) => {
  return (
    <Field label={label} required={schema.required}>
      <SDatePicker initialDate={getDate(value)} disabled />
    </Field>
  );
};

export const DatePicker = memo(DatePickerBase);

const TimePickerBase = ({ label, value, schema }: InputFieldProps) => {
  return (
    <Field label={label} required={schema.required}>
      <STimePicker value={getTime(value)} disabled />
    </Field>
  );
};

export const TimePicker = memo(TimePickerBase);

export const Date = {
  DateTimePicker,
  DatePicker,
  TimePicker,
};
