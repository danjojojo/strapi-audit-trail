import { createContext, useContext, useState } from 'react';

const MarkdownContext = createContext<
  | {
      enablePreview: boolean;
      setEnablePreview: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

export function useMarkdownContext() {
  const context = useContext(MarkdownContext);
  if (!context) {
    throw Error('useMarkdownContext must be used inside MarkdownContext.Provider!');
  }
  return context;
}

export function MarkdownProvider({ children }: { children: React.ReactNode }) {
  const [enablePreview, setEnablePreview] = useState<boolean>(false);

  return (
    <MarkdownContext.Provider
      value={{
        enablePreview,
        setEnablePreview,
      }}
    >
      {children}
    </MarkdownContext.Provider>
  );
}
