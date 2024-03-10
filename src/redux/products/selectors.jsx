import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = (state) => state.isLoading;
export const selectProductsCategories = (state) =>
  state.products.categoriesList;
export const selectAllProducts = (state) => state.products.cards;
export const selectSearchFilter = (state) => state.products.filters.search;
export const selectCategory = (state) => state.products.filters.categories;
export const selectRecomended = (state) => state.products.filters.recommended;

export const selectVisibleProducts = createSelector(
  [
    selectAllProducts, 
    selectSearchFilter, 
    selectCategory, 
    selectRecomended
  ],
  (
    products, 
    searchQuery, 
    categoryFilter, 
    recommendationFilter
    ) => {
    
    return products.filter((product) => {

      const isMatchSearchQuery = product.title.toLowerCase().includes(searchQuery.toLowerCase());

      const isMatchCategory =
        !categoryFilter || product.category === categoryFilter;

      const isMatchRecommendation = recommendationFilter
        ? product.groupBloodNotAllowed[recommendationFilter]
        : true;

      return isMatchSearchQuery && isMatchCategory && isMatchRecommendation;
    });
  }
);


