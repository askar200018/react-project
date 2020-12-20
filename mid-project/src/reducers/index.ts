import isLoggedInReducer from 'features/auth/models/isLoggedInSlice';
import activeUserReducer from 'features/auth/models/activeUserSlice';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({
  isLoggedIn: isLoggedInReducer,
  activeUser: activeUserReducer,
});
