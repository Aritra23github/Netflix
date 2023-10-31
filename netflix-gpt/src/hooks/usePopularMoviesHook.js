import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addPopularVideo } from '../utils/movieSlice';

const usePopularMovies = () => {

    const dispatch = useDispatch();
    
    const getMovieList = async () => {
        try {
            const response = await axios.get('http://localhost:1235/popular-movie');
            dispatch(addPopularVideo(response?.data?.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);
}


export default usePopularMovies;