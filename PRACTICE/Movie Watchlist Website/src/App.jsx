import { useState, useEffect } from "react";
import { ThemeProvider } from "./Context/themecontext";
import Button from "./Components/buttonToggler";
import { themeTogglerFunc } from "./utilsfunc";
import { MovieProvider } from "./Context/moviecontext";
function App() {
  // THEME FUNCTIONALITY
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => themeTogglerFunc(theme, setTheme);

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);
  // THEME FUNCTIONALITY

  // MOVIE FUNCTIONALITY
  const [movieArr, setmovieArr] = useState([]);
  const addMovie = (obj) => setmovieArr([...movieArr , obj])
  const removeMovie = () => {};
  // MOVIE FUNCTIONALITY

  return (
    <ThemeProvider value={{ theme, themeToggler }}>
      <MovieProvider value={{ movieArr, addMovie, removeMovie }}>
        <Button />
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
