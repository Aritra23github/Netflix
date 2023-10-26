import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayMovies from '../hooks/useNowPlayMoviesHook';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse