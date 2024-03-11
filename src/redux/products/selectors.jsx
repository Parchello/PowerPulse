export const selectIsLoading = (state) => state.isLoading;

export const selectProductsCategories = (state) =>
  state.products.categoriesList;
export const selectAllProducts = (state) => state.products.cards;
export const selectSearchFilter = (state) => state.products.filters.search;
export const selectCategory = (state) => state.products.filters.category;
export const selectRecomended = (state) => state.products.filters.recommended;
export const selectFilter = (state) => state.products.filters;
