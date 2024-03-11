import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  patchUserParams,
  patchAvatar,
} from '../../redux/profile/operations';
import toast from 'react-hot-toast';

export const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    user: {
      name: '',
      email: '',
      height: null,
      currentWeight: null,
      desiredWeight: null,
      birthday: null,
      blood: null,
      sex: null,
      levelActivity: null,
      bmr: null,
      avatar: null,
    },
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.email = action.payload.email;
        state.user.name = action.payload.name;
        state.user.height = action.payload.height;
        state.user.currentWeight = action.payload.currentWeight;
        state.user.desiredWeight = action.payload.desiredWeight;
        state.user.birthday = action.payload.birthday;
        state.user.blood = action.payload.blood;
        state.user.avatar = action.payload.avatarURL;
        state.user.sex = action.payload.sex;
        state.user.levelActivity = action.payload.levelActivity;
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
        state.user.name = action.payload.name;
        state.user.height = action.payload.height;
        state.user.currentWeight = action.payload.currentWeight;
        state.user.desiredWeight = action.payload.desiredWeight;
        state.user.birthday = action.payload.birthday;
        state.user.blood = action.payload.blood;
        state.user.sex = action.payload.sex;
        state.user.levelActivity = action.payload.levelActivity;
        state.user.bmr = action.payload.bmr;

        toast.success('Data saved!');
      })
      .addCase(patchUserParams.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchUserParams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        toast.error('Data required!');
      })
      .addCase(patchAvatar.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user.avatar = action.payload.avatarURL;
      })
      .addCase(patchAvatar.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});
export const ProfileReducer = ProfileSlice.reducer;
