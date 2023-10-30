import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: 'movies',
    initialState: {
        nowPlayMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo } = movies.actions;

export default movies.reducer;