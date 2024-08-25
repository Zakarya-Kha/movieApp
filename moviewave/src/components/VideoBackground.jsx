import React from 'react';
import { useSelector } from 'react-redux';
import useMovieById from '../hooks/useMovieById';

const VideoBackground = ({ movieid, bool }) => {
    const trailerMovie = useSelector((store) => store.movie.trailerMovie)
    useMovieById(movieid)

    return (
        <div className='w-full  overflow-hidden'>
            <iframe
                className={`${bool ? "w-full h-full" : "w-screen aspect-video"}`}
                src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen >
            </iframe>
        </div>
    );
};

export default VideoBackground;
