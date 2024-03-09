import { createSlice } from '@reduxjs/toolkit';
import { getProductsCategories } from './operations';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    error: null,
    cards: [],
    categoriesList: [],
    isLoading: false,
    filters: {
      search: '',
      categories: '',
      recomended: '',
    },
  },
  reducers: {
    setFilter(state, action) {
      state.filters.search = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsCategories.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getProductsCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoriesList = action.payload;
      })
      .addCase(getProductsCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilter } = productsSlice.actions;
