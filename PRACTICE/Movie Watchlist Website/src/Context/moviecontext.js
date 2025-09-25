import { createContext , useContext } from "react";

const MovieContext = createContext({
    movieArr : [],
    addMovie : ()=>{},
    removeMovie : ()=>{}
})

export const MovieProvider = MovieContext.Provider

export const useMovie = ()=>{
    return useContext(MovieContext)
}