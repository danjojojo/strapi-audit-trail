import { PLUGIN_ID } from '../../pluginId';
import { Form, useStrapiApp } from '@strapi/strapi/admin';
import { useState, useEffect, ComponentType } from 'react';
import { StyledCustomField } from '../styled/StyledCustomField';
import type { InputFieldProps, CustomFieldInputProps } from '../../types/fields.types';

export function CustomField({ label, value, schema }: InputFieldProps) {
  const [CustomFieldComponent, setCustomFieldComponent] = useState<
    ComponentType<CustomFieldInputProps> | undefined
  >(undefined);
  const getCustomField = useStrapiApp(PLUGIN_ID, (state) => state.customFields.get);

  useEffect(() => {
    const strapiCustomField = getCustomField(schema.customField!);
    if (strapiCustomField) {
      strapiCustomField.components.Input().then((module) => {
        if (module.default) {
          setCustomFieldComponent(() => module?.default as ComponentType<CustomFieldInputProps>);
        }
      });
    }
  }, [getCustomField, schema.customField]);

  if (!CustomFieldComponent) return null;

  return (
    <StyledCustomField.ReadOnly>
      <StyledCustomField.ReadOnlyModal />
      <Form method="PUT" disabled initialValues={{ customField: value }} width="100%" height="auto">
        <CustomFieldComponent
          name='customField'
          label={label}
          required={schema?.required}
          disabled
          value={value}
          attribute={schema as CustomFieldInputProps['attribute']}
        />
      </Form>
    </StyledCustomField.ReadOnly>
  );
}
