import { createSlice } from "@reduxjs/toolkit";


const gpt = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
});

export const { toggleGptSearch } = gpt.actions;

export default gpt.reducer; 