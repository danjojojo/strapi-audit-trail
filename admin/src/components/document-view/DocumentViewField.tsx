import { Media } from './fields/Media';
import { String } from './fields/String';
import { Integer } from './fields/Integer';
import { Boolean } from './fields/Boolean';
import { Relation } from './fields/Relation';
import { Component } from './fields/Component';
import type { DocumentViewFieldProps } from '../../types/fields.types';

export function DocumentViewField({
  label,
  type,
  value,
  schema,
  metadata,
  settings,
  componentSchema,
  componentLayout,
}: DocumentViewFieldProps) {
  switch (type) {
    case 'string':
    case 'uid':
    case 'email':
    case 'enumeration':
      return <String label={label} value={value} />;
    case 'integer':
      return <Integer label={label} value={value} />;
    case 'boolean':
      return <Boolean label={label} value={value} />;
    case 'relation':
      return <Relation label={label} value={value} metadata={metadata} />;
    case 'media':
      return <Media label={label} value={value} />;
    case 'component':
      return (
        <Component
          label={label}
          value={value}
          settings={settings}
          isRepeatable={schema.repeatable!}
          usedComponent={schema.component!}
          componentSchema={componentSchema}
          componentLayout={componentLayout}
        />
      );
    default:
      return null;
  }
}
