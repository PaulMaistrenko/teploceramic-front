import React, { useMemo, useState } from "react";

export const MainContext = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  currentPage: 'Home',
  setCurrentPage: () => {},
  query: '',
  setQuery: () => {},
  isSelectLangOpen: false,
  setIsSelectLangOpen: () => {},
  currentLang: 'English',
  setCurrentLang: () => {},
  isFiltersPageOpen: false,
  setIsFiltersPageOpen: () => {},
});

export const MainProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');
  const [isSelectLangOpen, setIsSelectLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
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
      isSelectLangOpen,
      setIsSelectLangOpen,
      currentLang,
      setCurrentLang,
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
      isSelectLangOpen,
      setIsSelectLangOpen,
      currentLang,
      setCurrentLang,
      isFiltersPageOpen,
      setIsFiltersPageOpen,
    ],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}