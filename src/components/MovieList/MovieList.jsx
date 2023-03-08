import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css"

const MovieList = ({movies}) => {
 console.log(movies)
  return (
    <div className="list">
      {movies.map((movie)=><MovieCard movie={movie}/>) }
      
    </div>
  );
};

export default MovieList;
