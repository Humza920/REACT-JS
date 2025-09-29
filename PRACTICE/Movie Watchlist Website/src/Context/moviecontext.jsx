import { createContext, useContext, useState , useEffect} from "react";
// import { useState , useEffect } from "react";
const MovieContext = createContext({
  movieArr: [],
  addMovie: (obj) => {},
  removeMovie: (id) => {},
});

export const MovieProvider = ({ children }) => {
  let getMovies = localStorage.getItem("Movies");
  getMovies = JSON.parse(getMovies);

  const [movieArr, setmovieArr] = useState(getMovies ? getMovies : []);
  console.log(movieArr);
  const addMovie = (obj) => setmovieArr([...movieArr, obj]);
  const removeMovie = (id) => {
    const remainArray = movieArr.filter((movie) => movie.id !== id);
    console.log(remainArray);
  };

  useEffect(() => {
    localStorage.setItem("Movies", JSON.stringify(movieArr));
  }, [movieArr]);
  return (
    <MovieContext.Provider value={{ movieArr, addMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
