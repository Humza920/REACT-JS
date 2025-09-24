import { useState , useEffect } from "react";
import { ThemeProvider } from "./Context/themecontext";
import Button from "./Components/buttonToggler";
function App() {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    if (theme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
};

  useEffect(() => {
    document.querySelector("html").classList.remove("dark" , "light")
    document.querySelector("html").classList.add(theme)
  }, [theme])
  

  return <ThemeProvider value={{ theme, themeToggler }}>
    <Button />
  </ThemeProvider>;
}

export default App;
