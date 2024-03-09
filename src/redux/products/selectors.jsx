import { createSelector } from '@reduxjs/toolkit';

export const selectProductsCategories = (state) => state.products.categoriesList;
export const selectSearchFilter = (state) => state.products.filters.search;
export const selectCategory = (state) => state.products.filters.categories;
export const selectRecomended = state=>state.products.filters.recomended
export const selectVisibleProducts = createSelector([
  selectSearchFilter,
  selectCategory,
  selectRecomended,
], () => { });
