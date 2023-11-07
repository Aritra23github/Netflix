import { createSlice } from "@reduxjs/toolkit";


const gpt = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        removeGptMovieSuggestions: (state, action) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    }
});

export const { toggleGptSearch, addGptMovies, removeGptMovieSuggestions } = gpt.actions;

export default gpt.reducer; 