export interface SearchInputProps {
  value: string;
  wipeAction: () => void;
  onChangeAction: (value: string) => void;
  size?: 'S' | 'M';
}

export interface SidebarListItemProps {
  active: boolean;
  href: string;
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

export interface EmptyStateProps {
  content?: string;
  hideAction?: boolean;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}
