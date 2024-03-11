import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com';

export const getAllExercises = createAsyncThunk(
  'exercises',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/exercises');

      return response.data;
    } catch (error) {
      toast.error('Error getting exercises');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFilterExercises = createAsyncThunk(
  'exercises/filters',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/exercises/filters');
      return response.data;
    } catch (error) {
      toast.error('Error getting exercises');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
