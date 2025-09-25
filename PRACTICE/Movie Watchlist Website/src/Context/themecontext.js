import { createContext , useContext } from "react";

const ThemeContext = createContext({
    theme:"dark",
    themeToggler:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = ()=>{
    return useContext(ThemeContext)
}