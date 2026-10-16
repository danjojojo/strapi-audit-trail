import { styled } from 'styled-components';
import { Field } from '../ui/Field';
import { normalizeRelations } from '../../helpers/document-view/field-value';
import { Button, Box, ScrollArea, Flex, Typography } from '@strapi/design-system';
import type {
  RelationProps,
  RelationButton,
  ScrollableRelationButtons,
} from '../../types/fields.types';

export function Relation({ label, value, metadata }: RelationProps) {
  const relations = normalizeRelations(value);

  return (
    <Field label={`${label}${relations.length > 1 ? ` (${relations.length})` : ''}`}>
      <ScrollableRelationButtons itemsLength={value?.length}>
        {relations.length > 0 ? (
          relations.map((v, idx) => (
            <RelationButton value={v?.[metadata?.edit?.mainField!]} key={idx} />
          ))
        ) : (
          <RelationButton value="No relation selected." />
        )}
      </ScrollableRelationButtons>
    </Field>
  );
}

function RelationButton({ value }: RelationButton) {
  return (
    <StyledButton width="100%" variant="tertiary" disabled size="L" justifyContent="flex-start">
      <Typography fontWeight="400">{value}</Typography>
    </StyledButton>
  );
}

function ScrollableRelationButtons({ itemsLength, children }: ScrollableRelationButtons) {
  return (
    <StyledBox width="100%" $overflowing={itemsLength > 4 ? true : false}>
      <ScrollArea>
        <Flex direction="column" width="100%" gap="4px" paddingRight="16px">
          {children}
        </Flex>
      </ScrollArea>
    </StyledBox>
  );
}

const StyledBox = styled(Box)<{ $overflowing: boolean }>`
  height: ${({ $overflowing }) => ($overflowing ? '216px' : '100%')};
`;

const StyledButton = styled(Button)`
  height: 49.2px !important;
`;
