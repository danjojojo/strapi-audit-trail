import { styled } from 'styled-components';
import { Typography, Box } from '@strapi/design-system';

const StyledBox = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.colors.neutral150};
  min-height: 64.89px;
`;

export function SidebarNote() {
  return (
    <StyledBox padding="12px">
      <Typography variant="pi" textColor="neutral600">
        All logs are kept for 30 days, then removed from view.
      </Typography>
    </StyledBox>
  );
}
