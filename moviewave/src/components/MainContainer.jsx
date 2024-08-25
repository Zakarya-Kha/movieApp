import React from "react";
import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector((store) => store.movie);
  return (
    <div className="absolute mt-[40%] z-10 px-3 bg-black w-full">
      <div className="container mx-auto">
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
        <MovieList title={"Popular Movies"} movies={movie.nowPopularMovie} />
        <MovieList title={"Top Rated Movies"} movies={movie.topRatedMovies} />
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovie} />
      </div>
    </div>
  );
};

export default MainContainer;
