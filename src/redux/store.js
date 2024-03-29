import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from '../redux/auth/slice';
import { ProfileReducer } from '../redux/profile/profileSlice.jsx';
import { productsReducer } from './products/productsSlice.jsx';
import { diaryReducer } from './diary/diaryReducer.jsx';
import { exercisesReducer } from './exercises/exercisesSlise.jsx';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    profile: ProfileReducer,
    products: productsReducer,
    diary: diaryReducer,
    exercises: exercisesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
