import { useState } from 'react';
import { useRouting } from './useRouting';
import { appendToPluginPath } from '../utils/routing';
import { TableProps } from '../types/ui.types';

export function useTable<T extends Record<string, any>, S extends keyof T & string>({
  rowLink,
  rowDialog,
}: Pick<TableProps<T, S>, 'rowDialog' | 'rowLink'>) {
  const { overrideNavigate } = useRouting();
  const isInteractive = Boolean(rowLink || rowDialog);

  const [dialogRow, setDialogRow] = useState<T | null>(null);

  function openDialogRow(row: T) {
    setDialogRow(row);
  }

  function closeDialogRow() {
    setDialogRow(null);
  }

  function getRowLink(row: T) {
    if (!rowLink) return null;
    if (!rowLink.path || rowLink.path.length === 0) return null;

    let url: string = '';
    for (const path of rowLink.path) {
      url += `/${row?.[path]}`;
    }

    if (!rowLink.params || rowLink.params.length === 0) return url;

    const params = rowLink.params;
    for (let i = 0; i <= params.length - 1; i++) {
      if (i === 0) {
        url += `?${params[i]}=${row?.[params[i]]}`;
      } else {
        url += `&${params[i]}=${row?.[params[i]]}`;
      }
    }
    return url;
  }

  const interactRow = (row: T) => {
    const link = getRowLink(row);
    if (link) {
      overrideNavigate(appendToPluginPath(link));
    } else if (rowDialog) {
      openDialogRow(row);
    } else {
      return;
    }
  };

  return {
    isInteractive,
    dialogRow,
    openDialogRow,
    closeDialogRow,
    interactRow,
  };
}
