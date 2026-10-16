export interface Relation {
  id?: number | string;
  documentId?: string;
  [key: string]: any;
}

export interface MediaEntry {
  id?: number | string;
  name: string;
  alternativeText?: string | null;
  url: string;
  caption?: string | null;
  width: number;
  height: number;
  formats?: Record<string, unknown>;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  previewUrl?: string | null;
  provider: string;
  provider_metadata?: unknown | null;
  createdAt: string;
  updatedAt: string;
  [key: string]: any;
}
