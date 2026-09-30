import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';
import { Page } from '@strapi/strapi/admin';
import { Main } from '@strapi/design-system';
import { Routes, Route } from 'react-router-dom';
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
            <Routes>
              <Route index element={<HomePage />} />
              <Route path=":collectionUid" element={<HomePage />} />
              <Route path=":collectionUid/:documentId" element={<DetailPage />} />
              <Route path="*" element={<Page.Error />} />
            </Routes>
          </ContentLayout>
        </Layout>
      </Main>
    </AppProvider>
  );
};

export default App;
