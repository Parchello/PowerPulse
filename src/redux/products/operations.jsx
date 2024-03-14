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
    const { title = "", category = "", recommended = "" } = query;
    let endpoint = 'api/products';
    try {
      if (title || category || recommended) {
        endpoint += `?title=${title}&category=${category}&recommended=${recommended}`;
      }
      const response = await axios.get(endpoint);
      return response.data.products;
    } catch (error) {
      //сумнівне рішення, як на мене. Але по іншому не знаю як =(
      if (error.response && error.response.status === 404) {
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
      console.log(response);
      return response.data;
    } catch (error) {
      toast.error('Unable to add product');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
