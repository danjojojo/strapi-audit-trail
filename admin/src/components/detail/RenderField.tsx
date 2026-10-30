import { Date } from '../fields/Date';
import { Json } from '../fields/Json';
import { Media } from '../fields/Media';
import { Blocks } from '../fields/Blocks';
import { String } from '../fields/String';
import { Integer } from '../fields/Integer';
import { Boolean } from '../fields/Boolean';
import { Relation } from '../fields/Relation';
import { Textarea } from '../fields/Textarea';
import { Markdown } from '../fields/Markdown';
import { Component } from '../fields/Component';
import type { RenderFieldProps } from '../../types/fields.types';
import { CustomField } from '../fields/CustomField';

export function RenderField({ label, type, value, schema, metadata, settings }: RenderFieldProps) {
  
  if (schema?.customField) {
    return <CustomField label={label} value={value} schema={schema} />;
  }

  switch (type) {
    case 'string':
    case 'uid':
    case 'email':
    case 'enumeration':
      return <String label={label} value={value} schema={schema} />;
    case 'integer':
    case 'biginteger':
    case 'decimal':
      return <Integer label={label} value={value} schema={schema} />;
    case 'json':
      return <Json label={label} value={value} schema={schema} />;
    case 'blocks':
      return <Blocks label={label} value={value} schema={schema} />;
    case 'boolean':
      return <Boolean label={label} value={value} schema={schema} />;
    case 'media':
      return <Media label={label} value={value} schema={schema} />;
    case 'text':
      return <Textarea label={label} value={value} schema={schema} />;
    case 'datetime':
      return <Date.DateTimePicker label={label} value={value} schema={schema} />;
    case 'date':
      return <Date.DatePicker label={label} value={value} schema={schema} />;
    case 'time':
      return <Date.TimePicker label={label} value={value} schema={schema} />;
    case 'relation':
      return <Relation label={label} value={value} metadata={metadata} schema={schema} />;
    case 'richtext':
      return <Markdown label={label} value={value} schema={schema} />;
    case 'component':
      return <Component label={label} value={value} settings={settings} schema={schema} />;
    default:
      return null;
  }
}
