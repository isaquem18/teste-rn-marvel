import React, {
  createContext,
  useState,
  ReactNode,
  useMemo,
  useContext,
} from 'react';

type IPageContext = {
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

type IPageProvider = {
  children: ReactNode;
};

const PageContext = createContext({} as IPageContext);

export function PageProvider({ children }: IPageProvider) {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [offset, setOffset] = useState(1);
  const [total, setTotal] = useState<number>(1);

  const page = useMemo(
    () => ({
      selectedPage,
      setSelectedPage,
      total,
      setTotal,
      offset,
      setOffset,
    }),
    [selectedPage, total, offset],
  );

  return <PageContext.Provider value={page}>{children}</PageContext.Provider>;
}

export function usePage() {
  const page = useContext(PageContext);

  return page;
}
