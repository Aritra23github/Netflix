import { createSlice } from "@reduxjs/toolkit";

const movies = createSlice({
    name: 'movies',
    initialState: {
        nowPlayMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies } = movies.actions;

export default movies.reducer;