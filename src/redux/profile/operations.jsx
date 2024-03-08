import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com';

export const fetchCurrentUser = createAsyncThunk(
  'currentUser/fetchUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users/current');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
