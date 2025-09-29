import { useState, useEffect } from "react";
import { ThemeProvider } from "./Context/themecontext";
import Button from "./Components/buttonToggler";
import Form from "./Components/Form";
import { themeTogglerFunc } from "./utilsfunc";
import { MovieProvider } from "./Context/moviecontext";
import Navbar from "./Components/Navbar";
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
  let getMovies = localStorage.getItem("Movies")
  getMovies = JSON.parse(getMovies)
  
  const [movieArr, setmovieArr] = useState(getMovies ? getMovies : []);
  console.log(movieArr);
  
  const addMovie = (obj) => setmovieArr([...movieArr , obj])
  const removeMovie = (id) => {
    const remainArray = movieArr.filter(movie=>movie.id !== id)
    console.log(remainArray);
  }

  useEffect(()=>{
    localStorage.setItem("Movies" , JSON.stringify(movieArr))
  },[movieArr])
  // MOVIE FUNCTIONALITY

  return (
    <ThemeProvider value={{ theme, themeToggler }}>
      <MovieProvider value={{ movieArr, addMovie, removeMovie }}>
        <Navbar />
        <Form /> 
      </MovieProvider>
    </ThemeProvider>
  );
}

export default App;
