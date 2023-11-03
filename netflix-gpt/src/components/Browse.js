import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayMovies from '../hooks/useNowPlayMoviesHook';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcomingMoviesHook';
import useTopRatedMovies from '../hooks/useTopRatedMoviesHook';
import usePopularMovies from '../hooks/usePopularMoviesHook';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  useNowPlayMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? 
        <GptSearch /> : 
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  )
}

export default Browse