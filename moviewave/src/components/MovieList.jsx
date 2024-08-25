import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, searchMovie = false }) => {
  if (!movies) return null;
  return (
    <div className="my-8">
      <h1 className={`${searchMovie ? "text-black text-2xl font-semibold py-5" : "text-2xl font-semibold py-5 text-white"}`}>
        {title}
      </h1>
      <div className="flex overflow-x-auto no-scrollbar space-x-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
