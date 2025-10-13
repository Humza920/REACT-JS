import { createContext, useContext, useState , useEffect} from "react";
import {addInCollection , getMoviesData} from "../utilsfunc"
const MovieContext = createContext({
  movieArr: [],
  addMovie: (obj , user) => {},
  removeMovie: (id) => {},
});

export const MovieProvider = ({ children }) => {
  const [movieArr, setmovieArr] = useState([]);
  const addMovie = (obj , user) => {
    addInCollection(user , "Movies" , obj)
  };
  const removeMovie = (id) => {
    const remainArray = movieArr.filter((movie) => movie.id !== id);
    console.log(remainArray);
  };

  useEffect(() => {
    const func = async () => {
      try {
        const check = await getMoviesData()
        setmovieArr(check)
        console.log(check);
        
      } catch (error) {
        console.log(error);
      }
    }
    func()
  },[]);
  return (
    <MovieContext.Provider value={{ movieArr, addMovie, removeMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  return useContext(MovieContext);
};
