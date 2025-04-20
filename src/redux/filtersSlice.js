import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: ''
    },
    reducers: {
        setFilter: (state, action) => {
            state.search = action.payload;
        },
    }
})

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;

export const selectStatusFilter = (state) => state.filters.status;