
import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState('signin');

    const toggleSignInForm = () => {
        if (form == 'signin') setForm('signup');
        else if (form == 'signup') setForm('signin');
    }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
                alt=""
            />
        </div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{form === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
            {
                form == 'signup' && 
                <input 
                    type="text" 
                    placeholder="Name" 
                    className='p-4 my-4 w-full bg-gray-700' 
                />
            }
            <input 
                type="text" 
                placeholder='Email' 
                className='p-4 my-4 w-full bg-gray-700' 
            />
            <input 
                type="text" 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700' 
            />
            {
                form == 'signup' &&
                <input 
                    type="text" 
                    placeholder="Confirm Password" 
                    className='p-4 my-4 w-full bg-gray-700' 
                />
            }
            <button 
                type="button" 
                className='p-4 my-6 bg-red-700 w-full rounded-lg'
            >
                {form === 'signin' ? 'Sign In' : 'Sign Up'}
            </button>
                
            <p className='py-4' onClick={toggleSignInForm} style={{cursor: 'pointer'}}>
                { form == 'signin' ? 'New to Netflix? Sign up now.' : 'Already registered? Sign in now.' } 
            </p>
                
        </form>
    </div>
  )
}

export default Login