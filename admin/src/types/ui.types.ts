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
  count?: number;
  backUrl?: string | null;
}

export interface EmptyStateProps {
  content?: string;
  hideAction?: boolean;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export interface BadgeColor {
  backgroundColor: string;
  textColor: string;
}

export interface TableProps<
  T extends Record<string, any>,
  S extends keyof T & string = keyof T & string,
> {
  data: T[];
  columns: {
    /** Set which columns to show */
    show: S[];
    /** Set which shown columns will be overridden with specific labels */
    override?: Partial<Record<S, string>>;
    /** Badge properties */
    badge?: {
      /** Set the column which will serve as the badge */
      column: NoInfer<S>;
      /** Pass an object of badge column value and BadgeColor */
      colors?: Record<string, BadgeColor>;
    };
  };
  /** Pass here the fields that will be joined, which then makes up the link which will happen when a row is clicked */
  rowLink?: (keyof T & string)[];
  pagination?: {
    pageCount: number;
  };
}
