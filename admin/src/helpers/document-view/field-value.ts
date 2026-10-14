export interface Relation {
  id?: number | string;
  documentId?: string;
  [key: string]: any;
}

export interface MediaEntry {
  id?: number | string;
  name?: string;
  url?: string;
  ext?: string;
  mime?: string;
  [key: string]: any;
}

export function normalizeRelations(value: any): Relation[] {
  if (!value) return [];
  if (Array.isArray(value)) return value as Relation[];
  if (typeof value === 'object' && 'count' in (value as object)) return [];
  return [value as Relation];
}

export function normalizeMediaEntries(value: any): MediaEntry[] {
  if (!value) return [];
  return Array.isArray(value) ? (value as MediaEntry[]) : [value as MediaEntry];
}
