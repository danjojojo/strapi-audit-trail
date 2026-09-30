import { HomePage } from './HomePage';
import { DetailPage } from './DetailPage';
import { Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="recents" element={<HomePage />} />

      <Route path="single-types/:collectionUid" element={<HomePage />} />
      <Route path="single-types/:collectionUid/:documentId?" element={<DetailPage />} />

      <Route path="collection-types/:collectionUid" element={<HomePage />} />
      <Route path="collection-types/:collectionUid/:documentId?" element={<DetailPage />} />

      <Route path="others/:collectionUid" element={<HomePage />} />
      <Route path="others/:collectionUid/:documentId?" element={<DetailPage />} />
    </Routes>
  );
}
