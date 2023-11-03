
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.user);
  const token = localStorage.getItem('token');

  const checkIfUserIsLoggedIn = () => {
    if (token) navigate('/browse');
    else navigate('/');
  }

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  const handleSignOut = () => {
    dispatch(removeUser());
    localStorage.removeItem('token');
    navigate('/');
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearch()); 
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44 h-45'
        src={LOGO_URL} 
        alt="" 
      />
      {
        token &&
        <div className='flex p-2'>
          <button 
            className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' 
            type="button"
            onClick={handleGptSearch}
          >
            GPT Search
          </button>
          <select className='p-2 m-2 bg-gray-900 text-white'>
            {
              SUPPORTED_LANGUAGES.map((lang) => <option key={lang.key} value={lang.key}>{lang.value}</option>)
            }
          </select>
          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={USER_AVATAR}
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      }
    </div>
  )
}

export default Header