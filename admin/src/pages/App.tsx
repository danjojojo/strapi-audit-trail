import { AppRoutes } from './AppRoutes';
import { Main } from '@strapi/design-system';
import { Layout } from '../components/layout/Layout';
import { Sidebar } from '../components/layout/Sidebar';
import { AppProvider } from '../providers/app.provider';
import { ContentLayout } from '../components/layout/ContentLayout';

const App = () => {
  return (
    <AppProvider>
      <Main>
        <Layout>
          <Sidebar />
          <ContentLayout>
            <AppRoutes />
          </ContentLayout>
        </Layout>
      </Main>
    </AppProvider>
  );
};

export default App;
