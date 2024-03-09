import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        cards: [],
        isLoading: false,
        filters: {
            search: '',
            categories: '',
            recomended: '',
        },
    },
    extraReducers: builder => {
        builder
            .addCase()
    }
})

export const productsReducer = productsSlice.reducer
// export const filterReducer = productsSlice.filters