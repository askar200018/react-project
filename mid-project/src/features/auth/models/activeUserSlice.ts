import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { House, Room } from 'features/rooms/types';
import { Profession, User } from '../types';

type State = User;
let houseId = 0;

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState: {} as User,
  reducers: {
    loginUser: (state: State, action: PayloadAction<User>) =>
      (state = action.payload),
    logoutUser: (state: State) => (state = {} as User),
    addActiveUserHouse: {
      reducer(state: State, action: PayloadAction<House>) {
        state.houses.push(action.payload);
      },
      prepare(house: House) {
        return { payload: { ...house, id: ++houseId } };
      },
    },
    removeActiveUserHouse: (state: State, action: PayloadAction<number>) => {
      state.houses = state.houses.filter((h) => h.id !== action.payload);
    },
    addActiveUserRoom: (
      state: State,
      action: PayloadAction<{ room: Room; houseId: number }>,
    ) => {
      const { room, houseId } = action.payload;
      state.houses.forEach((house) => {
        if (house.id === houseId) {
          house.rooms.push(room);
        }
      });
    },
    removeActiveUserRoom: (
      state: State,
      action: PayloadAction<{ roomId: number; houseId: number }>,
    ) => {
      const { roomId, houseId } = action.payload;
      state.houses.forEach((house) => {
        if (house.id === houseId) {
          house.rooms = house.rooms.filter((r) => r.id !== roomId);
        }
      });
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addActiveUserHouse,
  removeActiveUserHouse,
  addActiveUserRoom,
  removeActiveUserRoom,
} = activeUserSlice.actions;

export default activeUserSlice.reducer;
