import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWY0NjY1YzAyMTE5NDQ0ODQ2NTNkOSIsImlhdCI6MTcxMDE4MDY0OCwiZXhwIjoxNzEwMjYzNDQ4fQ.Hx8wPr-xseRZ9tpxsWOEr7oqaN9FRwFBE-QboGkmnf8';
axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com/';

const date = '11/03/2024';

// products

export const fetchDiaryProducts = createAsyncThunk(
  '/api/diary',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/diary/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date,
        },
      });
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductDiaryById = createAsyncThunk(
  '/dairy/product',
  async (productInfo, thunkAPI) => {
    try {
      const res = await axios.delete('api/diary/delproduct', {
        data: productInfo,
      });
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// exercises

export const fetchDiaryExercises = createAsyncThunk(
  '/api/diary/exercises',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/diary/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date,
        },
      });
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
