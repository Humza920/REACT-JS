import { createContext , useContext } from "react";

const ThemeContext = createContext({
    theme:"dark",
    themeToggler:(theme , setTheme)=>{}
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = ()=>{
    return useContext(ThemeContext)
}