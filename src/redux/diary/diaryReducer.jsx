import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  deleteExerciseById,
  deleteProductDiaryById,
  fetchDiaryDashboard,
  fetchDiaryExercises,
  fetchDiaryProducts,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejection = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const diaryProductsSlice = createSlice({
  name: 'diary',
  initialState,

  reducers: {
    setInitialDate: (state, action) => {
      state.initialDate = action.payload;
      console.log('StateDate', action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      // dashboard
      .addCase(fetchDiaryDashboard.pending, handlePending)
      .addCase(fetchDiaryDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.dayDashboard = action.payload || [];
        console.log('ACTION', action);
      })
      .addCase(fetchDiaryDashboard.rejected, handleRejection)

      // diary
      .addCase(fetchDiaryProducts.pending, handlePending)
      .addCase(fetchDiaryProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.products || [];
        state.error = null;
      })
      .addCase(fetchDiaryProducts.rejected, handleRejection)

      // delete the item

      .addCase(deleteProductDiaryById.pending, handlePending)
      .addCase(deleteProductDiaryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deletedProduct = state.products.findIndex(
          (product) => product._id === action.meta.arg
        );
        state.products.splice(deletedProduct, 1);
      })
      .addCase(deleteProductDiaryById.rejected, handleRejection)

      // exercises

      .addCase(fetchDiaryExercises.pending, handlePending)
      .addCase(fetchDiaryExercises.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.exercises = action.payload.exercises || [];
        state.error = null;
      })

      .addCase(fetchDiaryExercises.rejected, handleRejection)
      // deleteExercise
      .addCase(deleteExerciseById.pending, handlePending)
      .addCase(deleteExerciseById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const deletedExercise = state.exercises.findIndex(
          (exercise) => exercise._id === action.meta.arg
        );
        state.exercises.splice(deletedExercise, 1);
      })
      .addCase(deleteExerciseById.rejected, handleRejection);
  },
});

export const diaryReducer = diaryProductsSlice.reducer;
export const { setInitialDate } = diaryProductsSlice.actions;
