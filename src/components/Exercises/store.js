import { configureStore } from '@reduxjs/toolkit';

export const filtersAction = (value) => {
  return {
    type: 'exercises/filter',
    payload: value,
  };
};

export const clickCategory = (value) => {
  return {
    type: 'exercises/category',
    payload: value,
  };
};

export const timerTime = (value) => {
  return {
    type: 'exercises/time',
    payload: value,
  };
};

export const timerPlay = (value) => {
  return {
    type: 'exercises/play',
    payload: value,
  };
};

export const Calories = (value) => {
  return {
    type: 'exercises/colories',
    payload: value,
  };
};

const initialState = {
  filters: '',
  category: '',
  timer: '',
  isPlayed: false,
  calories: '',
};

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'exercises/filter':
      return {
        ...state,
        filters: action.payload,
      };
    case 'exercises/category':
      return {
        ...state,
        category: action.payload,
      };
    case 'exercises/time':
      return {
        ...state,
        timer: action.payload,
      };
    case 'exercises/play':
      return {
        ...state,
        isPlayed: action.payload,
      };
    case 'exercises/colories':
      return {
        ...state,
        calories: action.payload,
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReduser,
});
