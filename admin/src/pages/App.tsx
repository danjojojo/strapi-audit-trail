import { Page } from '@strapi/strapi/admin';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from '../providers/app.provider';

import { HomePage } from './HomePage';

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<Page.Error />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
