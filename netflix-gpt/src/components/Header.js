
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';

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

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44 h-45'
        src={LOGO_URL} 
        alt="" 
      />
      {
        token &&
        <div className='flex'>
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