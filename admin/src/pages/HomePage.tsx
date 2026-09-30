import { Main } from '@strapi/design-system';
import { Layout } from '../components/layout/Layout';
import { Header } from '../components/homepage/Header';
import { Sidebar } from '../components/layout/sidebar/Sidebar';

const HomePage = () => {
  return (
    <Main>
      <Layout>
        <Sidebar />
        <Header />
      </Layout>
    </Main>
  );
};

export { HomePage };
