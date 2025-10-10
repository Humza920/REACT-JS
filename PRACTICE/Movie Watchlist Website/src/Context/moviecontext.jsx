import { createContext, useContext, useState , useEffect} from "react";
import {addInCollection , getMoviesData} from "../utilsfunc"
const MovieContext = createContext({
  movieArr: [],
  addMovie: (obj , user) => {},
  removeMovie: (id) => {},
});

export const MovieProvider = ({ children }) => {
  let getMovies = localStorage.getItem("Movies");
  getMovies = JSON.parse(getMovies);

  const [movieArr, setmovieArr] = useState(getMovies ? getMovies : []);
  console.log(movieArr);
  const addMovie = (obj , user) => {
    addInCollection(user , "Movies" , obj)
  };
  const removeMovie = (id) => {
    const remainArray = movieArr.filter((movie) => movie.id !== id);
    console.log(remainArray);
  };

  useEffect(() => {
    getMoviesData()
  }, []);
  return (
    <MovieContext.Provider value={{ movieArr, addMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
