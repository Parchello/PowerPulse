import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com';

export const getAllExercises = createAsyncThunk(
  'exercises',
  async ({ filter, value }, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/exercises?filter=${filter}&value=${value}`
      );

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
      const response = await axios.get(`api/exercises/filters`);
      return response.data;
    } catch (error) {
      toast.error('Error getting exercises');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addExerciseToDiary = createAsyncThunk(
  'exercises/addexercis',
  async (exerciseData, thunkAPI) => {
    try {
      const response = await axios.post('api/diary/addexercise', exerciseData);
      return response.data;
    } catch (error) {
      toast.error('Unable to add exercise');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
