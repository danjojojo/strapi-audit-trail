import { useRouting } from '../../hooks/useRouting';
import { ArrowRight, Collapse } from '@strapi/icons';
import { StyledDialog } from '../styled/StyledDialog';
import { StyledLinkButton } from '../styled/StyledLinkButton';
import { safeParse, spaceSnakeCase } from '../../utils/string';
import { getClientDatetime } from '../../helpers/audit-logs-formatters';
import { Box, Dialog, Typography, Flex, IconButton, Grid } from '@strapi/design-system';
import type { AuditLoginsData } from '../../types/service.types';

export function AuditLoginDialog({
  data,
  onClose,
}: {
  data: AuditLoginsData;
  onClose: () => void;
}) {
  const { overrideNavigate } = useRouting();
  const userDetails = safeParse(data.userDetails);

  return (
    <Dialog.Root open onOpenChange={(open: boolean) => !open && onClose()}>
      <StyledDialog.Content onOpenAutoFocus={(e: Event) => e.preventDefault()}>
        <Dialog.Header>
          <Flex justifyContent="space-between" width="100%">
            <Typography>{`Login Details - ${data.emailAddress}`}</Typography>
            <Dialog.Cancel>
              <IconButton label="Collapse">
                <Collapse />
              </IconButton>
            </Dialog.Cancel>
          </Flex>
        </Dialog.Header>
        <Box padding="24px" width="100%">
          <Grid.Root gap="24px">
            {data.loginResult === 'failed' && (
              <GridItem label="Login error reason">
                <Typography variant="omega">
                  {spaceSnakeCase(data.loginErrorReason, 'sentence')}
                </Typography>
              </GridItem>
            )}

            <GridItem label="Login request time">
              <Typography variant="omega">{getClientDatetime(data.requestTime)}</Typography>
            </GridItem>

            <GridItem label="User Details">
              {userDetails?.id ? (
                <StyledLinkButton
                  href={`/admin/settings/users/${userDetails.id}`}
                  size="S"
                  variant="secondary"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) =>
                    overrideNavigate(`/admin/settings/users/${userDetails.id}`, e)
                  }
                  endIcon={<ArrowRight />}
                >
                  Verified user
                </StyledLinkButton>
              ) : (
                <Typography variant="omega">{data.userDetails}</Typography>
              )}
            </GridItem>

            <GridItem label="IP Address">
              <Typography variant="omega">{data.ipAddress}</Typography>
            </GridItem>

            <GridItem label="User Client">
              <Typography variant="omega">{data.userClient}</Typography>
            </GridItem>
          </Grid.Root>
        </Box>
      </StyledDialog.Content>
    </Dialog.Root>
  );
}

function GridItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Grid.Item col={6} s={12}>
      <Flex width="100%" alignItems="start" direction="column" gap="4px">
        <Typography variant="sigma" textColor="neutral400">
          {label}
        </Typography>
        {children}
      </Flex>
    </Grid.Item>
  );
}
