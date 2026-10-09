import { styled } from 'styled-components';
import { Main } from '@strapi/design-system';
import { CollectionProvider } from './collection.provider';

const StyledMain = styled(Main)`
  overflow-x: hidden;
  height: 100%;
`;

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <CollectionProvider>{children}</CollectionProvider>
    </StyledMain>
  );
}
