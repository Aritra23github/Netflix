import React from 'react';
import { languageSettings } from '../utils/languageConstant';

const GptSearchBar = () => {
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input 
          className='p-4 m-4 col-span-9'
          type="text" 
          name="" 
          value="" 
          placeholder={languageSettings.bg.gptSearchPlaceholder}
        />
        <button 
          type="button" 
          className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        >
          {languageSettings.bg.gptSearchButton}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar