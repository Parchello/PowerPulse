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
  async (query = {}, thunkAPI) => {
    const { title = '', category = '', recommended = '' } = query;

    let endpoint = 'api/products';
    try {
      let endpoint = 'api/products';
      const queryParams = {};

      if (title.trim() !== '') {
        queryParams.title = title;
      }

      if (category.trim() !== '') {
        queryParams.category = category;
      }

      if (recommended.trim() !== '') {
        queryParams.recommended = recommended;
      }

      const queryString = new URLSearchParams(queryParams).toString();
      if (queryString !== '') {
        endpoint += `?${queryString}`;
      }

      const response = await axios.get(endpoint);
      return response.data.products;
    } catch (error) {
      if (error.response.data.message === 'Products not found') {
        return [];
      }
      toast.error("Sorry. We don't find any results");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductToDiary = createAsyncThunk(
  'diary/addProduct',
  async (productData, thunkAPI) => {
    try {
      const response = await axios.post('api/diary/addproduct', productData);
      console.log('resp: ', response);
      return response.data;
    } catch (error) {
      toast.error('Unable to add product');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
