// import { createSelector } from '@reduxjs/toolkit';

export const selectProductsCategories = (state) => state.products.categoriesList;
export const selectSearchFilter = (state) => state.products.filters.search;
export const selectCategory = (state) => state.products.filters.categories;
// export const selectVisibleProducts = createSelector([]);
