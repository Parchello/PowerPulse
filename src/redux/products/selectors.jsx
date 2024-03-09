import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = state => state.isLoading;
export const selectProductsCategories = (state) => state.products.categoriesList;
export const selectAllProducts = (state) => state.products.cards;
export const selectSearchFilter = (state) => state.products.filters.search;
export const selectCategory = (state) => state.products.filters.categories;
export const selectRecomended = state=>state.products.filters.recomended
export const selectVisibleProducts = createSelector([
  selectSearchFilter,
  selectCategory,
  selectRecomended,
], () => { });
//в останньому селекторі треба прописати логіку по якій буде фільтруватись список з картками
//потім рендерити вже відфільтровані картка. За замовчуванням рендериться все
