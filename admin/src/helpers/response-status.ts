import type { ResponseStatus } from '../types/service.types';

export function getResponseStatus(status: number): ResponseStatus {
  if (status >= 400 && status < 500) {
    return 'invalid';
  }

  if (status >= 500) {
    return 'network-error';
  }

  return 'none';
}
