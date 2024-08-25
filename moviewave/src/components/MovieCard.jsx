import React from 'react';
import { TMDB_IMG_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getId, setOpen } from '../redux/movieSlice';

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div 
      className='w-36 sm:w-40 md:w-48 lg:w-56 flex-shrink-0 pr-2 cursor-pointer'
      onClick={handleOpen}
    >
      <img 
        src={`${TMDB_IMG_URL}/${posterPath}`} 
        alt="movie-banner" 
        className="w-full h-auto rounded-lg object-cover" 
      />
    </div>
  );
};

export default MovieCard;
