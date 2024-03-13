import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoading = (state) => state.isLoading;
export const selectAllCategory = (state) => state.exercises.category;
export const selectExercises = (state) => state.exercises.exercises;
export const selectFilters = (state) => state.exercises.filters;
export const selectSelectedCategories = (state) =>
  state.exercises.selectedCategories;
export const selectUrlParams = (state) => state.exercises.urlParams;
// export const selectTitle = (state) => state.exercises.initialTitle;
export const selectFilteredCategory = (state) =>
  state.exercises.filteredCategory;
export const selectTimer = (state) => state.exercises.timer;
export const selectIsPlayed = (state) => state.exercises.isPlayed;
export const selectSelectedItem = (state) => state.exercises.selectedItem;
export const selectCalories = (state) => state.exercises.calories;

//
export const selectFormModal = (state) => state.exercises.isOpenFormModal;
export const selectSucssesModal = (state) => state.exercises.isOpenSucssesModal;

export const filteredCategory = createSelector(
  [selectAllCategory, selectFilters],
  (category, filters) => {
    if (!category || category.length === 0) {
      return [];
    }
    return category.filter((item) =>
      item.filter.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
