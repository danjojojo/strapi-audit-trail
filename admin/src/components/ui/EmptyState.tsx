import { ArrowLeft } from '@strapi/icons';
import { styled } from 'styled-components';
import { EMPTY_STATE } from '../../constants';
import { useRouting } from '../../hooks/useRouting';
import { EmptyDocuments } from '@strapi/icons/symbols';
import { Flex, Box, Typography, LinkButton } from '@strapi/design-system';
import type { EmptyStateProps } from '../../types/ui.types';
import type { MouseEvent } from 'react';

const EmptyStateIconWrapper = styled(Box)`
  svg {
    height: 22rem;
    width: 22rem;
  }
`;

export function EmptyState({ content, icon, action, hideAction = false }: EmptyStateProps) {
  const { contentTypePath, overrideNavigate } = useRouting();

  return (
    <Box
      padding="56px"
      paddingRight="56px"
      paddingBottom="40px"
      paddingTop="0px"
      width="100%"
      height="100%"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        background="neutral0"
        hasRadius={true}
        shadow="tableShadow"
        width="100%"
        height="100%"
      >
        <EmptyStateIconWrapper paddingBottom={6} aria-hidden>
          {icon ?? <EmptyDocuments />}
        </EmptyStateIconWrapper>

        <Box paddingBottom={4}>
          <Typography
            variant="delta"
            tag="p"
            textAlign="center"
            textColor="neutral600"
            width="350px"
          >
            {content ?? EMPTY_STATE.content}
          </Typography>
        </Box>

        {!hideAction
          ? (action ?? (
              <LinkButton
                variant="secondary"
                href={contentTypePath}
                startIcon={<ArrowLeft />}
                onClick={(e: MouseEvent<HTMLButtonElement>) => overrideNavigate(contentTypePath, e)}
              >
                {EMPTY_STATE.action.label}
              </LinkButton>
            ))
          : null}
      </Flex>
    </Box>
  );
}
