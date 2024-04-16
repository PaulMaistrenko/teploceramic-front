import React, { useMemo, useState } from "react";

export const MainContext = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  currentPage: 'home',
  setCurrentPage: () => {},
  query: '',
  setQuery: () => {},
});

export const MainProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [query, setQuery] = useState('');

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentPage,
      setCurrentPage,
      query,
      setQuery,
    }),
    [
      isMenuOpen,
      setIsMenuOpen,
      currentPage,
      setCurrentPage,
      query,
      setQuery,
    ],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}