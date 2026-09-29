import { Main } from '@strapi/design-system';
import { Layout } from '../components/layout/Layout';
import { Header } from '../components/homepage/Header';
import { AppProvider } from '../providers/app.provider';
import { Sidebar } from '../components/layout/sidebar/Sidebar';

const HomePage = () => {
  return (
    <Main>
      <AppProvider>
        <Layout>
          <Sidebar />
          <Header />
        </Layout>
      </AppProvider>
    </Main>
  );
};

export { HomePage };
