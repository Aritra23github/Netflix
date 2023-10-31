import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addTopRatedVideo } from '../utils/movieSlice';

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    
    const getMovieList = async () => {
        try {
            const response = await axios.get('http://localhost:1235/top-rated-movie');
            dispatch(addTopRatedVideo(response?.data?.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);
}


export default useTopRatedMovies;