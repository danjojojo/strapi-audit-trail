import { Flex, Typography } from '@strapi/design-system';

export function EmptyComponent() {
  return (
    <Flex
      hasRadius={true}
      width="100%"
      height="150px"
      padding="24px"
      gap="20px"
      borderColor="neutral150"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="omega" textColor="neutral500">
        No available data yet.
      </Typography>
    </Flex>
  );
}
