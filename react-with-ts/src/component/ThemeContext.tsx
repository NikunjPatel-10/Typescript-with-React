import React, { Children } from "react";
import { theme } from "./Theme";

export const ThemeContext = React.createContext(theme);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
