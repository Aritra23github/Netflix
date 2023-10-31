import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return movies?.nowPlayMovies && (
    <div className='bg-black'>  
      <div className='-mt-51 pl-12 relative z-20'>
        <MovieList title={"Now playing"} movies={movies.nowPlayMovies} />
        <MovieList title={"Popular movies"} movies={movies.popularVideo} />
        <MovieList title={"Top rated movie"} movies={movies.topRatedVideo} />
        <MovieList title={"Upcoming movie"} movies={movies.upcomingVideo} />
      </div>
    </div>
  )
}

export default SecondaryContainer