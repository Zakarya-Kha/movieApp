import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import SearchMovie from "./SearchMovie";

const Browse = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  // custom Hooks
  useNowPlayingMovie();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpComingMovies()


  

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <SearchMovie/> : (
            <>
             <MainContainer />
             <MovieContainer />
            </>
          )
        }
       
      </div>
    </div>
  );
};

export default Browse;
