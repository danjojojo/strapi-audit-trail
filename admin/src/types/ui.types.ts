export interface SearchInputProps {
  value: string;
  wipeAction: () => void;
  onChangeAction: (value: string) => void;
  size?: 'S' | 'M';
}

export interface SidebarListItemProps {
  active: boolean;
  onClick: () => void;
  label: string;
}

export interface SidebarListTitleProps {
  title: string;
  count: number;
}

export interface HeaderProps {
  title: string | null | undefined;
  backUrl?: string | null;
}
