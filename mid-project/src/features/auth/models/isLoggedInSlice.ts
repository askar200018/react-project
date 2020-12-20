import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = boolean;
// const login: CaseReducer<State> = (state) => (state = true);

const isLoggedInSlice = createSlice({
  name: 'isLoggedIn',
  initialState: false,
  reducers: {
    login: (state: State) => (state = true),
    logout: (state: State) => (state = false),
  },
});

export const { login, logout } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
