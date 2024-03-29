import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://powerpulse-group5-backend.onrender.com';

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/register', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error('This email is already registered');
      } else {
        toast.error(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/users/login', credentials);
      setAuthHeader(res.data.token);
      const params = await axios.get("/api/users/current");
      return params.data;
    } catch (error) {
      toast.error("Email or password is wrong");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/logout');
    clearAuthHeader();
  } catch (error) {
    toast.error("Something went wrong");
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
