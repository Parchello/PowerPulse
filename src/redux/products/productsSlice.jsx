import { createSlice } from '@reduxjs/toolkit';
import { getProductsCategories, getAllProducts } from './operations';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    error: null,
    cards: [],
    categoriesList: [],
    isLoading: false,
    filters: {
      search: '',
      category: '',
      recommended: '',
    },
  },
  reducers: {
    setFilter(state, action) {
      state.filters.search = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
    setRecomended(state, action) {
      state.filters.recommended = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder //categories
      .addCase(getProductsCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductsCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categoriesList = action.payload;
      })
      .addCase(getProductsCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) //products
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.meta.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilter, setCategory, setRecomended } = productsSlice.actions;
