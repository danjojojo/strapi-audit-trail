import { Routes, Route } from 'react-router-dom';

// PAGES
import { ErrorPage } from './ErrorPage';
import { DetailPage } from './DetailPage';
import { RecentsPage } from './RecentsPage';
import { SingleTypePage } from './SingleTypePage';
import { CollectionTypePage } from './CollectionTypePage';
import { LoginSessionsPage } from './LoginSessionsPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* LANDING PAGE */}
      <Route index element={<RecentsPage />} />

      {/* RECENTS */}
      <Route path="/?" element={<RecentsPage />} />

      {/* CONTENT-TYPES */}
      <Route path="single-types/:collectionUid?" element={<SingleTypePage />} />
      <Route path="collection-types/:collectionUid?" element={<CollectionTypePage />} />

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
