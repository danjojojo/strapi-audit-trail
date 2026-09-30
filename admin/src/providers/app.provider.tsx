import { CollectionProvider } from './collection.provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CollectionProvider>{children}</CollectionProvider>
    </>
  );
}
