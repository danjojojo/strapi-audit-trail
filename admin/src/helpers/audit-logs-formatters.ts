import type { AdminUser } from '@strapi/strapi/admin';

export type TextCase = 'retain' | 'upper' | 'lower' | 'sentence' | 'capitalize';

export function spaceCamelCase(text: string, textCase: TextCase = 'retain'): string {
  const spaced = text.replace(/([a-z])([A-Z])/g, '$1 $2');

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
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    default:
      return spaced;
  }
}

export function getClientDatetime(datetime: string): string {
  return new Date(datetime).toLocaleTimeString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

export function getActionFrom(user: string) {
  let actionFrom = JSON.parse(user) as AdminUser;
  const email = actionFrom?.email;
  const name = [actionFrom.firstname, actionFrom.lastname];
  return email ?? name.join(' ');
}
