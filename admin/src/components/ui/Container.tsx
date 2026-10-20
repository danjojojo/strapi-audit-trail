import { FieldLayout } from './FieldLayout';
import { Flex } from '@strapi/design-system';
import type { DefaultContainerProps, BaseContainerProps } from 'src/types/fields-container.types';

function DefaultContainer({ container, renderFields }: DefaultContainerProps) {
  return (
    <Flex
      direction="column"
      background="neutral0"
      hasRadius={true}
      shadow="tableShadow"
      width="100%"
      height="100%"
      padding="24px"
      gap="20px"
      borderColor="neutral150"
    >
      {container?.fields.map((field, idx) => (
        <FieldLayout.Row key={idx}>
          {field.map((f) => (
            <FieldLayout.RowItem key={f.id} $size={f.schema.type === 'boolean' ? 3 : f.size}>
              {renderFields(f)}
            </FieldLayout.RowItem>
          ))}
        </FieldLayout.Row>
      ))}
    </Flex>
  );
}

function DynamiczoneContainer({ children }: BaseContainerProps) {
  return (
    <Flex
      direction="column"
      background="neutral100"
      hasRadius={true}
      justifyContent="center"
      width="100%"
      height="100%"
    >
      {children}
    </Flex>
  );
}

export const Container = {
  Default: DefaultContainer,
  Dynamiczone: DynamiczoneContainer,
};
