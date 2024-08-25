import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    nowPopularMovie: null,
    upcomingMovies: null,
    topRatedMovies: null,
    toggle: false,
    trailerMovie: null,
    open: false,
    id: "",
  },
  reducers: {
    getNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    getNowPopularMovie: (state, action) => {
      state.nowPopularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpComingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },

    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    
      getId : (state, action) => {
        state.id = action.payload;
      }
    
  },
});

export const {
  getNowPlayingMovie,
  getNowPopularMovie,
  getTopRatedMovie,
  getUpComingMovie,
  setToggle,
  getTrailerMovie,
  setOpen,
  getId
} = movieSlice.actions;

export default movieSlice.reducer;
