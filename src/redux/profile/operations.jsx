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
      // console.log(response.data.user);
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const patchUserParams = createAsyncThunk(
  'profile/userParams',
  async ({ values }, thunkAPI) => {
    console.log('values in action', values);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      console.log('No token found');
    }
    token.set(persistedToken);

    try {
      console.log('{values}', values);
      const res = await axios.patch('/api/users/params', values);
      console.log('res in params', res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// "blood":3,
// "currentWeight": 55,
// "dateOfBirth": "20.02.1992",
// "desiredWeight": 55,
// "height": 160,
// "levelActivity": 4,
// "name": "examplea",
// "sex": "male"

// }
