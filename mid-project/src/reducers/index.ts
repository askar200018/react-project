import isLoggedInReducer from 'features/auth/models/isLoggedInSlice';
import activeUserReducer from 'features/auth/models/activeUserSlice';
import usersReducer from 'features/auth/models/usersSlice';
import roomsReducer from 'features/rooms/models/roomsSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  isLoggedIn: isLoggedInReducer,
  activeUser: activeUserReducer,
  users: usersReducer,
  rooms: roomsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
