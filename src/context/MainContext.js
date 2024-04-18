import React, { useMemo, useState } from "react";

export const MainContext = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  currentPage: 'home',
  setCurrentPage: () => {},
  query: '',
  setQuery: () => {},
  isFiltersPageOpen: false,
  setIsFiltersPageOpen: () => {},
});

export const MainProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [query, setQuery] = useState('');
  const [isFiltersPageOpen, setIsFiltersPageOpen] = useState(false);

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentPage,
      setCurrentPage,
      query,
      setQuery,
      isFiltersPageOpen,
      setIsFiltersPageOpen,
    }),
    [
      isMenuOpen,
      setIsMenuOpen,
      currentPage,
      setCurrentPage,
      query,
      setQuery,
      isFiltersPageOpen,
      setIsFiltersPageOpen,
    ],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}