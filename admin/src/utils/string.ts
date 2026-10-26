import type { TextCase } from '../types/utils.types';

export function safeParse(text: string | null) {
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch (error) {
    return text;
  }
}

export function spaceSnakeCase(text: string, textCase: TextCase = 'retain'): string {
  const spaced = text.replace(/_+/g, ' ').trim();

  switch (textCase) {
    case 'upper':
      return spaced.toUpperCase();
    case 'lower':
      return spaced.toLowerCase();
    case 'sentence':
      return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
    case 'capitalize':
      return spaced
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    default:
      return spaced;
  }
}
