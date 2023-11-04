import React from 'react';
import { languageSettings } from '../utils/languageConstant';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const searchText = useRef("");
  const language = useSelector((store) => store.config?.lang);
  
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input 
          ref={searchText}
          className='p-4 m-4 col-span-9'
          type="text" 
          name="" 
          value="" 
          placeholder={languageSettings[language].gptSearchPlaceholder}
        />
        <button 
          type="button" 
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        >
          {languageSettings[language].gptSearchButton}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar