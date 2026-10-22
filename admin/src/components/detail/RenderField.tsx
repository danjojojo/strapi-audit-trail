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

export function RenderField({ label, type, value, schema, metadata, settings }: RenderFieldProps) {
  switch (type) {
    case 'string':
    case 'uid':
    case 'email':
    case 'enumeration':
      return <String label={label} value={value} />;
    case 'integer':
    case 'biginteger':
    case 'decimal':
      return <Integer label={label} value={value} />;
    case 'json':
      return <Json label={label} value={value} />;
    case 'blocks':
      return <Blocks label={label} value={value} />;
    case 'boolean':
      return <Boolean label={label} value={value} />;
    case 'media':
      return <Media label={label} value={value} />;
    case 'text':
      return <Textarea label={label} value={value} />;
    case 'datetime':
      return <Date.DateTimePicker label={label} value={value} />;
    case 'date':
      return <Date.DatePicker label={label} value={value} />;
    case 'time':
      return <Date.TimePicker label={label} value={value} />;
    case 'relation':
      return <Relation label={label} value={value} metadata={metadata} />;
    case 'richtext':
      return <Markdown label={label} value={value} />;
    case 'component':
      return <Component label={label} value={value} settings={settings} schema={schema} />;
    default:
      return null;
  }
}
