
import React, { useState, useRef } from 'react';
import Header from './Header';
import { validateForm } from '../utils/validate';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form, setForm] = useState('signin');

    const [errorMessage, setErrorMessage] = useState({
        emailMsg: "",
        passwordMsg: "",
    });

    const [signUpFormFieldValue, setSignUpFormFieldValue] = useState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
    });

    const [confirmPassword, setConfirmPassword] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        if (form == 'signin') setForm('signup');
        else if (form == 'signup') setForm('signin');
    }

    const handleAuthenticantionFormSubmit = async () => {
        // Form Validation
        let message = validateForm(email.current.value, password.current.value);
        setErrorMessage(message);

        if (errorMessage.emailMsg != "" || errorMessage.passwordMsg != "") return;

        //Sign In or Sign Up
        
        try {
            if (form == 'signup') {
                const response = await axios.post('http://localhost:1235/sign-up', signUpFormFieldValue);

                const {id, firstName, email} = response?.data?.data;

                dispatch(addUser({ uid: id, firstName: firstName, email: email}));

                navigate("/browse");
            } else if (form == 'signin') {
                let payload = {
                    email: signUpFormFieldValue.email,
                    password: signUpFormFieldValue.password
                };

                const response = await axios.post('http://localhost:1235/sign-in', payload);
                
                const { id, email, firstName, token } = response?.data?.data;

                dispatch(addUser({uid: id, email: email, firstName: firstName, token: token}));

                localStorage.setItem('token', token);
                
                navigate("/browse");
            }
        } catch (error) {
            console.log(error);
        }
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
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{form === 'signin' ? 'Sign In' : 'Sign Up'}</h1>
            {
                form == 'signup' && 
                <input 
                    type="text" 
                    placeholder="First name" 
                    className='p-4 my-4 w-full bg-gray-700'
                    value={signUpFormFieldValue.firstName}
                    onChange={
                        (e) => {
                            setSignUpFormFieldValue((prev) => {
                                return {
                                    ...prev,
                                    firstName: e.target.value
                                }
                            })
                        }
                    } 
                />
            }
            <input 
                type="text" 
                placeholder='Email' 
                className='p-4 my-4 w-full bg-gray-700' 
                ref={email}
                autoComplete='false' 
                value={signUpFormFieldValue.email}
                onChange={
                    (e) => {
                        setSignUpFormFieldValue((prev) => {
                            return {
                                ...prev,
                                email: e.target.value
                            }
                        })
                    }
                }
            />
            <p className='text-red-400 font-bold py-3'>{errorMessage.emailMsg}</p>
            <input 
                type="password" 
                placeholder='Password' 
                className='p-4 my-4 w-full bg-gray-700'
                ref={password} 
                autoComplete='false'
                value={signUpFormFieldValue.password}
                onChange={
                    (e) => {
                        setSignUpFormFieldValue((prev) => {
                            return {
                                ...prev,
                                password: e.target.value
                            }
                        })
                    }
                }
            />
            <p className='text-red-400 font-bold py-3'>{errorMessage.passwordMsg}</p>
            {/* {
                form == 'signup' &&
                <input 
                    type="text" 
                    placeholder="Confirm Password" 
                    className='p-4 my-4 w-full bg-gray-700' 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            } */}
            <button 
                type="button" 
                className='p-4 my-6 bg-red-700 w-full rounded-lg'
                onClick={handleAuthenticantionFormSubmit}
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