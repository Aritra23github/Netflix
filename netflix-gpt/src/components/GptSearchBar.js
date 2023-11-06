import React, { useRef } from 'react';
import { languageSettings } from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import axios from 'axios';

const GptSearchBar = () => {
  const searchText = useRef("");
  const language = useSelector((store) => store.config?.lang);

  const getMovieList = async (movie) => {
    try {
      const response = await axios.post(`http://localhost:1235/list-of-movies`, {
        'movie': movie
      });

      console.log('m:',response.data.data);
      return response.data?.data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearchGpt = async () => {
    try {
      const content = searchText.current.value;
      
      const query = 'Act as a movie recommendation system and suggest some movies for the query: ' + content + '. only give me comma separated likes the example result given ahead. Example: Golmal, Don, sholey.';
      
      const response = await axios.post('http://localhost:1235/movie-suggestion', {
        'search': query
      });

      console.log(response);
      const movies = response.data?.data[0]?.message?.content.split(',');
      console.log(movies);
      const tmdbMovieList = movies.map((movie) => 
        getMovieList(movie)
      );
      console.log(tmdbMovieList);
      const tmdbMovieListResponse = await Promise.all(tmdbMovieList);
      console.log('t:', tmdbMovieListResponse);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input 
          ref={searchText}
          className='p-4 m-4 col-span-9'
          type="text" 
          placeholder={languageSettings[language].gptSearchPlaceholder}
        />
        <button 
          type="button" 
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
          onClick={handleSearchGpt}
        >
          {languageSettings[language].gptSearchButton}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar