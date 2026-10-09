import { WarningCircle } from '@strapi/icons';
import { Flex, Typography } from '@strapi/design-system';

export function ErrorState({ content }: { content?: string }) {
  return (
    <Flex
      direction="column"
      gap="12px"
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
    >
      <WarningCircle width="10rem" height="5rem" />
      <Typography variant="omega" tag="p" textAlign="center" textColor="neutral600" width="350px">
        {content ?? 'Something went wrong. Please refresh this page.'}
      </Typography>
    </Flex>
  );
}
