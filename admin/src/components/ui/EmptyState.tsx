import { ArrowLeft } from '@strapi/icons';
import { EMPTY_STATE } from '../../constants';
import { Flex, Box, Typography, Button } from '@strapi/design-system';
import type { EmptyStateProps } from '../../types/ui.types';
import { useNavigate, useParams } from 'react-router-dom';

export function EmptyState({ content, action, hideAction = false }: EmptyStateProps) {
  const navigate = useNavigate();
  const params = useParams();
  const collectionPath = params['*']?.split('/')[0];

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
              <Button
                variant="secondary"
                startIcon={<ArrowLeft />}
                onClick={() => navigate(`/content-manager/${collectionPath}`, { replace: true })}
              >
                {EMPTY_STATE.action.label}
              </Button>
            ))
          : null}
      </Flex>
    </Box>
  );
}
