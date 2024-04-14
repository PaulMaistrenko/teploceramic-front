import React, { useMemo, useState } from "react";

export const MainContext = React.createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export const MainProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
    }),
    [
      isMenuOpen,
      setIsMenuOpen,
    ],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}