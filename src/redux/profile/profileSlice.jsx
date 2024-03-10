import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser } from '../../redux/profile/operations';

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    currentUser: {
      name: 'User Name',
      email: '',
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
      });
  },
});
export const ProfileReducer = ProfileSlice.reducer;
