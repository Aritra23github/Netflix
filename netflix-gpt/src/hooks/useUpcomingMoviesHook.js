import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addUpcomingVideo } from '../utils/movieSlice';

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    
    const getMovieList = async () => {
        try {
            const response = await axios.get('http://localhost:1235/upcoming-movie');
            dispatch(addUpcomingVideo(response?.data?.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieList();
    }, []);
}


export default useUpcomingMovies;