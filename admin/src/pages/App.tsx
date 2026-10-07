import { AppRoutes } from './AppRoutes';
import { Layout } from '../components/layout/Layout';
import { Sidebar } from '../components/layout/Sidebar';
import { AppProvider } from '../providers/app.provider';
import { ContentLayout } from '../components/layout/ContentLayout';

const App = () => {
  return (
    <AppProvider>
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
