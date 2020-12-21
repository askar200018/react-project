import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profession, User } from '../types';

type State = User[];
let nextUserId = 1;

const initialState: User[] = [
  {
    id: 1,
    name: 'askar',
    email: 'askar@test.kz',
    password: 'askar',
    houses: [],
    profession: Profession.Developer,
  },
];

const usersSlice = createSlice({
  name: 'isLoggedIn',
  initialState,
  reducers: {
    addUser: {
      reducer(state: State, action: PayloadAction<User>) {
        state.push(action.payload);
      },
      prepare(user: User) {
        return { payload: { ...user, id: ++nextUserId } };
      },
    },
    editUser(state: State, action: PayloadAction<User>) {
      state = state.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user;
      });
      return state;
    },
  },
});

export const { addUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
