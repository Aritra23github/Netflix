import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailerVideo = (movieId) => {
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        try {
            const response = await axios.get(`http://localhost:1235/trailer?movieId=${movieId}`);
            dispatch(addTrailerVideo(response?.data?.data));
        } catch (error) {
        console.log(error);
        }
    }

    useEffect(() => {
        getMovieTrailer();
    }, []);
}

export default useMovieTrailerVideo;