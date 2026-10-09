import { Routes, Route } from 'react-router-dom';

// PAGES
import { ErrorPage } from './ErrorPage';
import { DetailPage } from './DetailPage';
import { RecentsPage } from './RecentsPage';
import { ContentTypePage } from './ContentTypePage';
import { LoginSessionsPage } from './LoginSessionsPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route index element={<RecentsPage />} />

      {/* RECENTS */}
      <Route path="/?" element={<RecentsPage />} />

      {/* CONTENT-TYPES */}
      <Route path="collection-types/:collectionUid?" element={<ContentTypePage />} />
      <Route path="single-types/:collectionUid?" element={<ContentTypePage />} />

      {/* OTHER PAGES */}
      <Route path="others/admin::session" element={<LoginSessionsPage />} />

      {/* DETAIL PAGES */}
      <Route path="single-types/:collectionUid/:documentId?" element={<DetailPage />} />
      <Route path="collection-types/:collectionUid/:documentId?" element={<DetailPage />} />
      <Route path="others/:collectionUid/:documentId?" element={<DetailPage />} />

      {/* ERROR PAGE */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
