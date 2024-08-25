import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovie)
  if (!movie) return 
  

  const {title , id , overview} = movie[4]

  return (
    <div className=''>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieid={id}/>
    </div>
  )
}

export default MovieContainer
