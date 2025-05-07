import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState: [],
    reducers: {
        addFavourite: (state, action) => {
            const exists = state.find((car) => car.id === action.payload.id);
            if (!exists) {
                state.push(action.payload);
            }
        },
        removeFavourite: (state, action) => {
            return state.filter((car) => car.id !== action.payload);
        },
    },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;
export default favouritesSlice.reducer;