import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const getProductsList = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/products');
      return response.data;
    } catch (error) {
      toast.error('Error getting products');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
