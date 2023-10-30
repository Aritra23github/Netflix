import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowPlayMovies = () => {

    const dispatch = useDispatch();
    
    const getMovieList = async () => {
        try {
            const response = await axios.get('http://localhost:1235/now-playing-movie');
            dispatch(addNowPlayingMovies(response?.data?.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);
}


export default useNowPlayMovies;