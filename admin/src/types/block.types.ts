import type { MediaEntry } from './field-value.types';

/** FOR BASE BLOCK */
export interface BaseBlock {
  children: React.ReactNode;
}

/** FOR LIST BLOCK */
export interface ListBlockProps extends BaseBlock {
  format: 'ordered' | 'unordered';
}

/** FOR IMAGE BLOCK */
export interface ImageBlockProps extends BaseBlock {
  data: MediaEntry;
}

/** FOR HEADING BLOCK */
export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface HeadingBlockProps extends BaseBlock {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/** FOR BLOCK TOOLKIT */
export interface ToolkitProps {
  icon: React.JSX.Element;
  label: string;
}

/** FOR BLOCK RENDERER */
export interface BlocksRendererProps {
  value: any;
}
