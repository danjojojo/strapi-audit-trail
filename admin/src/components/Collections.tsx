import { useCollections } from '../hooks/useCollections';

export function Collections() {
  const { collections } = useCollections();

  if (!collections || collections.length === 0) return null;

  return (
    <ol>
      List of collections:
      
      {collections.map((collection) => (
        <li>
          <h3>uid: {collection.uid}</h3>
          <p>name: {collection.name}</p>
        </li>
      ))}
    </ol>
  );
}
