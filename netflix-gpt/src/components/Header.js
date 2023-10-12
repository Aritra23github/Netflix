
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate('/');
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44 h-45'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
        alt="" 
      />
      <div className='flex'>
        <img
          className="hidden md:block w-12 h-12"
          alt="usericon"
          src='https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png'
        />
        <button className="font-bold text-white" onClick={handleSignOut}>
          (Sign Out)
        </button>
      </div>
    </div>
  )
}

export default Header