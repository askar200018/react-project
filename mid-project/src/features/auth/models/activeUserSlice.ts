import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { House } from 'features/rooms/types';
import { Profession, User } from '../types';

type State = User;

const initialState: User = {
  name: '',
  password: '',
  email: '',
  houses: [],
  profession: Profession.Designer,
};

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    loginUser: (state: State, action: PayloadAction<User>) =>
      (state = action.payload),
    logoutUser: (state: State) => (state = initialState),
    editUser: (state: State, action: PayloadAction<User>) =>
      (state = action.payload),
    addHouse: (state: State, action: PayloadAction<House>) => {
      state.houses.push(action.payload);
    },
  },
});

export const { loginUser, logoutUser } = activeUserSlice.actions;

export default activeUserSlice.reducer;
