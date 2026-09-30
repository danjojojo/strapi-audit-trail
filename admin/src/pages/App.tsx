import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from '../providers/app.provider';

import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';

import { Main } from '@strapi/design-system';
import { Layout } from '../components/layout/Layout';
import { Sidebar } from '../components/layout/Sidebar';

const App = () => {
  return (
    <AppProvider>
      <Main>
        <Layout>
          <Sidebar />
          <Routes>
            <Route index element={<HomePage />} />
            <Route path=":collectionUid" element={<HomePage />} />
            <Route path=":collectionUid/:documentId" element={<DetailPage />} />
            <Route path="*" element={<Page.Error />} />
          </Routes>
        </Layout>
      </Main>
    </AppProvider>
  );
};

export default App;
