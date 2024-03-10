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
      recomended: '',
    },
  },
  reducers: {
    //тут я намагався 3 нижні редюсери записати одним і пропустити через свіч але не вийшло
    // setFilter(state, action) {
    //   const { type, payload } = action;
    //   switch (type) {
    //     case 'search':
    //       state.filters.search = payload;
    //       break;
    //     case 'category':
    //       state.filters.category = payload;
    //       break;
    //     case 'recomended':
    //       state.filters.recomended = payload;
    //       break;

    //     default:
    //       break;
    //   }
    // },
    setFilter(state, action) {
      state.filters.search = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
    setRecomended(state, action) {
      state.filters.recomended = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder //categories
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
      }) //products
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cards = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
export const { setFilter, setCategory, setRecomended } = productsSlice.actions;
