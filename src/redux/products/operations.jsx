import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const getProductsCategories = createAsyncThunk(
  'products/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/products/categories');
      return response.data;
    } catch (error) {
      toast.error('Error getting categories');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('api/products');
      return response.data.products;
    } catch (error) {
      toast.error('Error getting products');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductToDiary = createAsyncThunk(
  'diary/addProduct',
  async (productData, thunkAPI) => {
    try {
      const response = await axios.post('api/diary/addproduct', productData);
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error('Unable to add product');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
