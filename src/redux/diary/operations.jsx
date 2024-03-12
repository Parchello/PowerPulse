import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZjA5M2I2NThhY2FlN2VkYWJmMTgyNCIsImlhdCI6MTcxMDI2NTI3MCwiZXhwIjoxNzEwMzQ4MDcwfQ.lUUrarcU2X8Ufl4LxgfDnkMTHhsFzn3VV5pqY04qZbU';
axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com/';

// useEffect(() => {
//   const token = useSelector(Token);
// });

const date = '11/03/2024';

// dairy

export const fetchDiaryDashboard = createAsyncThunk(
  '/api/dashboard',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/diary', {
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

// products

export const fetchDiaryProducts = createAsyncThunk(
  '/api/diary',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/diary', {
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
