import React from 'react'
import { TMDB_IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath, originalTitle}) => {
  if (!posterPath) return null;
  return (
    <div className='w-48'>
        <img 
            className='pr-4'
            src={TMDB_IMG_CDN + posterPath} 
            alt={originalTitle} 
        />
    </div>
  )
}

export default MovieCard