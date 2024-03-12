import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { useSelector } from 'react-redux';
// import { Token } from '../profile/selectors';
// import { useEffect } from 'react';

// const tokenFromLS = localStorage.getItem('token');

// console.log(tokenFromLS);

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWY0NjY1YzAyMTE5NDQ0ODQ2NTNkOSIsImlhdCI6MTcxMDE4MDY0OCwiZXhwIjoxNzEwMjYzNDQ4fQ.Hx8wPr-xseRZ9tpxsWOEr7oqaN9FRwFBE-QboGkmnf8';
axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com/';

// useEffect(() => {
//   const token = useSelector(Token);
// });

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
  async (_id, thunkAPI) => {
    try {
      const res = await axios.delete(
        'api/diary/delproduct',

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            date,
            productId: _id,
          },
        }
      );
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

export const deleteExerciseById = createAsyncThunk(
  '/dairy/exercise',
  async (_id, thunkAPI) => {
    try {
      const res = await axios.delete(
        'api/diary/delexercise',

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            date,
            exerciseId: _id,
          },
        }
      );
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
