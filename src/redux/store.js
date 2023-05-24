import { configureStore, combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import cartSlice from './cartSlice';
import userSlice from './userSlice';
import productSlice from './productSlice';

const persistConfig = {
  key: 'root',
  storage,
};

let rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  product: productSlice
});

let reducerPersisted = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: reducerPersisted,
});
