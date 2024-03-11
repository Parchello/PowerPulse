import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWQ2ZjViODFlNzQzZDk0YmQ4YmZkZSIsImlhdCI6MTcxMDE2OTA2NiwiZXhwIjoxNzEwMjUxODY2fQ.lG8fvIUCYgm8XzJhC6iOScEdTnKar5Urw-r-9hr1psY';
axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com/';

const date = '09/03/2024';
// const requestData = {
//   date: '07/03/2024',
// };

export const fetchDiaryProducts = createAsyncThunk(
  '/api/diary',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/', {
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
      console.log(productInfo);
      const res = await axios.delete({
        payload: productInfo,
      });
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchDiaryProducts = createAsyncThunk(
//   '/api/diary',
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get('/', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(date),
//       });
//       console.log(res.data);
//       return res.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addDiaryProduct = createAsyncThunk(
//   '/api/diary',
//   async (newProduct, thunkAPI) => {
//     try {
//       const res = await axios.post('/product', {
//         headers: {},
//       });
//     } catch (error) {}
//   }
// );
