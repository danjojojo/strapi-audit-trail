import { styled } from 'styled-components';
import { Main } from '@strapi/design-system';
import { CollectionProvider } from './collection.provider';
import { ConfigProvider } from './config.provider';

const StyledMain = styled(Main)`
  overflow-x: hidden;
  height: 100%;
`;

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledMain>
      <ConfigProvider>
        <CollectionProvider>{children}</CollectionProvider>
      </ConfigProvider>
    </StyledMain>
  );
}
