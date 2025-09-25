import { useState , useEffect } from "react";
import { ThemeProvider } from "./Context/themecontext";
import Button from "./Components/buttonToggler";
import { themeTogglerFunc } from "./utilsfunc";
function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = ()=>{
    themeTogglerFunc(theme , setTheme)
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark" , "light")
    document.querySelector("html").classList.add(theme)
  }, [theme])
  

  return <ThemeProvider value={{ theme, themeToggler }}>
    <Button />
  </ThemeProvider>;
}

export default App;
