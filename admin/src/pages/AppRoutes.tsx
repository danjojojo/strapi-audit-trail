import { Routes, Route } from 'react-router-dom';

// PAGES
import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';
import { RecentsPage } from './RecentsPage';
import { LoginSessionsPage } from './LoginSessionsPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route index element={<RecentsPage />} />
      
      {/* RECENTS */}
      <Route path="recents" element={<RecentsPage />} />

      {/* CONTENT-TYPES */}
      <Route path="single-types/:collectionUid" element={<HomePage />} />
      <Route path="collection-types/:collectionUid" element={<HomePage />} />

      {/* OTHER PAGES */}
      <Route path="others/admin::session" element={<LoginSessionsPage />} />

      {/* DETAIL PAGES */}
      <Route path="single-types/:collectionUid/:documentId?" element={<DetailPage />} />
      <Route path="collection-types/:collectionUid/:documentId?" element={<DetailPage />} />
      <Route path="others/:collectionUid/:documentId?" element={<DetailPage />} />
    </Routes>
  );
}
