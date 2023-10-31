import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: 'movies',
    initialState: {
        nowPlayMovies: null,
        trailerVideo: null,
        popularVideo: null,
        topRatedVideo: null,
        upcomingVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addPopularVideo: (state, action) => {
            state.popularVideo = action.payload;
        },
        addTopRatedVideo: (state, action) => {
            state.topRatedVideo = action.payload;
        },
        addUpcomingVideo: (state, action) => {
            state.upcomingVideo = action.payload;
        }
    }
});

export const { 
    addNowPlayingMovies, 
    addTrailerVideo,
    addPopularVideo,
    addTopRatedVideo,
    addUpcomingVideo
} = movies.actions;

export default movies.reducer;