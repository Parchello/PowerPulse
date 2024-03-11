import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchCurrentUser = createAsyncThunk(
  'profile/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      console.log('No token found');
    }
    token.set(persistedToken);
    try {
      const response = await axios.get('/api/users/current');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUserParams = createAsyncThunk(
  'profile/userParams',
  async ({ values }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      console.log('No token found');
    }
    token.set(persistedToken);

    try {
      const res = await axios.patch('/api/users/params', values);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchAvatar = createAsyncThunk(
  'profile/avatar',
  async (avatar, thunkAPI) => {
    console.log('avatar in operations', avatar);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      console.log('No token found');
    }
    token.set(persistedToken);

    const formData = new FormData();
    formData.append('avatar', avatar);

    try {
      const response = await axios.patch('/api/users/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log('res in action', response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
