import { createContext, useContext } from "react";

const ThemeContext = createContext({
    theme: "light",
    darktheme: () => { },
    lighttheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider

export const useTheme = ()=>{
    return useContext(ThemeContext)
}