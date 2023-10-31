import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayMovies from '../hooks/useNowPlayMoviesHook';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMoviesHook';
import useTopRatedMovies from '../hooks/useTopRatedMoviesHook';
import usePopularMovies from '../hooks/usePopularMoviesHook';

const Browse = () => {
  useNowPlayMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse