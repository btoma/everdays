import { createSlice } from '@reduxjs/toolkit';


export const funeralHomesSlice = createSlice({
    name: 'funeralHomes',
    initialState: { value: { homes: [], nextPage: 0} },
    reducers: {
        setFuneralHomes: (state, action) => {
           state.value = action.payload
        },
    }
});


export const { setFuneralHomes } = funeralHomesSlice.actions;

export default funeralHomesSlice.reducer;