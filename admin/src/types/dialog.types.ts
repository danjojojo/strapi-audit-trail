export interface BaseDialogProps<T> {
  data: T;
  onClose: () => void;
}

export interface DialogGridItemProps {
  label: string;
  children: React.ReactNode;
}
