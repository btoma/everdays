import { createSlice } from '@reduxjs/toolkit';


export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
            value: {
                page: 1,
                pages: 0
            }
        },
    reducers: {
        setPages: (state, action) => {
            const { setPages} = action.payload;
            state.value = { ...state.value, pages: setPages }
        },
        selectPage: (state, action) => {
            const { selectPage } = action.payload;
            state.value = { ...state.value, page: selectPage}
        },
    }
});


export const { setPages, selectPage } = paginationSlice.actions;

export default paginationSlice.reducer;