import { createContext, useContext } from "react";
import { themeTogglerFunc } from "../utilsfunc";
import { useState, useEffect } from "react";

const ThemeContext = createContext({
  theme: "dark",
  themeToggler: () => {},
});

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("dark");
  const themeToggler = ()=>themeTogglerFunc(theme, setTheme);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
