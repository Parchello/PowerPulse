import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com/';

// dairy

export const fetchDiaryDashboard = createAsyncThunk(
  '/api/dashboard',
  async (info, thunkAPI) => {
    const { token, date } = info;
    try {
      const res = await axios.get(`/api/diary?date=${date}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // params: {
        //   date,
        // },
      });
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// products

export const fetchDiaryProducts = createAsyncThunk(
  '/api/diary',
  async (info, thunkAPI) => {
    const { token, date } = info;
    try {
      const res = await axios.get(`/api/diary?date=${date}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      if (error.response.data.message === 'Dairy entry not found') {
        return [];
      }
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductDiaryById = createAsyncThunk(
  '/dairy/product',
  async (inf, thunkAPI) => {
    const { date, _id, token } = inf;
    try {
      const res = await axios.delete(
        'api/diary/delproduct',

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            productId: _id,
            date,
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
  async (info, thunkAPI) => {
    const { date, token } = info;
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
  async (inf, thunkAPI) => {
    const { _id, token, date } = inf;
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
