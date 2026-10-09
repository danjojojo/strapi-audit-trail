import { AppRoutes } from './AppRoutes';
import { Page } from '@strapi/strapi/admin';
import { Layout } from '../components/layout/Layout';
import { Sidebar } from '../components/layout/Sidebar';
import { AppProvider } from '../providers/app.provider';
import { ContentLayout } from '../components/layout/ContentLayout';

const App = () => {
  return (
    <AppProvider>
      <Page.Title>Audit Trail</Page.Title>
      <Layout>
        <Sidebar />
        <ContentLayout>
          <AppRoutes />
        </ContentLayout>
      </Layout>
    </AppProvider>
  );
};

export default App;
