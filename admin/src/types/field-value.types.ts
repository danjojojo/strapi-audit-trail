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
