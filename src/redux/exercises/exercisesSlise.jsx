import { createSlice } from '@reduxjs/toolkit';
import {
  addExerciseToDiary,
  getAllExercises,
  getFilterExercises,
} from './operation';

export const exercisesSlise = createSlice({
  name: 'exercise',
  initialState: {
    isLoading: false,
    exercises: [],
    category: [],
    filters: 'Body parts',
    selectedCategories: '',
    filteredCategory: '',
    urlParams: 'bodyPart',

    timer: '',
    passTime: 180,
    isPlayed: false,
    selectedItem: null,
    calories: null,

    isOpenFormModal: false,
    isOpenSucssesModal: false,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filters = action.payload;
    },
    setCategory(state, action) {
      state.selectedCategories = action.payload;
    },

    setFilteredCategory(state, action) {
      state.filteredCategory = action.payload;
    },
    setUrlParams(state, action) {
      state.urlParams = action.payload;
    },

    setTimer(state, action) {
      state.timer = action.payload;
    },
    setPassTime(state, action) {
      state.passTime = action.payload;
    },
    setIsPlayed(state, action) {
      state.isPlayed = action.payload;
    },
    setSelectedId(state, action) {
      state.selectedItem = action.payload;
    },
    setCalories(state, action) {
      state.calories = action.payload;
    },
    setFormModal(state, action) {
      state.isOpenFormModal = action.payload;
    },
    setSucssesModal(state, action) {
      state.isOpenSucssesModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder //exercises
      .addCase(getAllExercises.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getAllExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.exercises = action.payload;
      })
      .addCase(getAllExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) //exercises/filters
      .addCase(getFilterExercises.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFilterExercises.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload;
      })
      .addCase(getFilterExercises.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addExerciseToDiary.pending, (state) => {
        state.isLoading = true;
        state.isOpenFormModal = true;
        state.isOpenSucssesModal = false;
      })
      .addCase(addExerciseToDiary.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.isOpenFormModal = false;
        state.isOpenSucssesModal = true;
      })
      .addCase(addExerciseToDiary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isOpenFormModal = true;
        state.isOpenSucssesModal = false;
      });
  },
});

export const exercisesReducer = exercisesSlise.reducer;
export const {
  setFilter,
  setCategory,
  setFilteredCategory,
  setUrlParams,
  setTimer,
  setIsPlayed,
  setCalories,
  setSelectedId,
  setFormModal,
  setSucssesModal,
  setPassTime,
} = exercisesSlise.actions;
