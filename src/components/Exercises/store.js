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

const initialState = {
  filters: '',
  category: '',
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
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReduser,
});
