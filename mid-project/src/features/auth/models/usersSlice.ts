import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from 'api/usersAPI';
import { AppThunk } from 'store';
import { Profession, User } from '../types';

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  isFetched: boolean;
}
let nextUserId = 1;

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
  isFetched: false,
};

function startLoading(state: UsersState) {
  state.isLoading = true;
}

function loadingFailed(state: UsersState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersStart: startLoading,
    getUsersSuccess(state: UsersState, { payload }: PayloadAction<User[]>) {
      state.users = payload;
      state.isLoading = false;
      state.error = null;
      state.isFetched = true;
    },
    addUser: {
      reducer(state: UsersState, action: PayloadAction<User>) {
        const { users } = state;
        users.push(action.payload);
      },
      prepare(user: User) {
        return { payload: { ...user, id: ++nextUserId } };
      },
    },
    editUser(state: UsersState, action: PayloadAction<User>) {
      const { users } = state;
      const newUsers = users.map((user) => {
        if (user.id === action.payload.id) {
          user = action.payload;
        }
        return user;
      });
      state.users = newUsers;
    },
    getUsersFailure: loadingFailed,
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  addUser,
  editUser,
  getUsersFailure,
} = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const users = await getUsers();
    dispatch(getUsersSuccess(users));
  } catch (err) {
    dispatch(getUsersFailure(err.toString()));
  }
};
