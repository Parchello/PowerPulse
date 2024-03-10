import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  patchUserParams,
} from '../../redux/profile/operations';

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    currentUser: {
      name: '',
      email: '',
    },
    params: {
      name: '',
      height: null,
      currentWeight: null,
      desiredWeight: null,
      birthday: null,
      blood: null,
      sex: null,
      levelActivity: null,
    },
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(patchUserParams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.params = action.payload;
      })
      .addCase(patchUserParams.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchUserParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const ProfileReducer = ProfileSlice.reducer;
