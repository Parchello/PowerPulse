import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { deleteProductDiaryById, fetchDiaryProducts } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  console.log(state);
};

const handleRejection = (state, action) => {
  console.log(state, action);
  // state.diary.isLoading = false;
  // state.diary.error = action.payload;
};

const diaryProductsSlice = createSlice({
  name: 'diary',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchDiaryProducts.pending, handlePending)
      .addCase(fetchDiaryProducts.fulfilled, (state, action) => {
        console.log('action: ', action.payload.products);
        state.isLoading = false;
        state.products = action.payload.products;
        state.error = null;
      })
      .addCase(fetchDiaryProducts.rejected, handleRejection)

      // delete the item

      .addCase(deleteProductDiaryById.pending, handlePending)
      .addCase(deleteProductDiaryById.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = null;
        const deletedProduct = state.products.findIndex(
          (product) => product._id === action.payload.products.productId._id
        );
        state.products.splice(deletedProduct, 1);
      })
      .addCase(deleteProductDiaryById.rejected, handleRejection);

    // [fetchDiaryProducts.pending]: handlePending,
    // [fetchDiaryProducts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.products = action.payload;
    //   state.error = null;
    // },
    // [fetchDiaryProducts.rejected]: handleRejection,
  },
});

export const DiaryProductsReducer = diaryProductsSlice.reducer;
