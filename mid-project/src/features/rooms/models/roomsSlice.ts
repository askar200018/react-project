import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialRooms } from 'data/rooms.mock';
import { Comment, Room } from '../types';

type State = Room[];

const initialState: Room[] = InitialRooms;

const roomsSlice = createSlice({
  name: 'roomsSlice',
  initialState,
  reducers: {
    addLike(state: State, action: PayloadAction<number>) {
      const room = state.find((room) => room.id === action.payload);
      if (room) {
        room.like += 1;
      }
    },
    removeLike(state: State, action: PayloadAction<number>) {
      const room = state.find((room) => room.id === action.payload);
      if (room) {
        room.like -= 1;
      }
    },
    addComment(
      state: State,
      action: PayloadAction<{ id: number; comment: Comment }>,
    ) {
      const { id, comment } = action.payload;
      const room = state.find((room) => room.id === id);
      if (room) {
        room.comments.push(comment);
      }
    },
    removeComment(
      state: State,
      action: PayloadAction<{ id: number; comment: Comment }>,
    ) {
      const { id, comment } = action.payload;
      const room = state.find((room) => room.id === id);
      if (room) {
        room.comments = room.comments.filter(
          (comment) => comment.id !== comment.id,
        );
      }
    },
  },
});

export const {
  addLike,
  removeLike,
  addComment,
  removeComment,
} = roomsSlice.actions;

export default roomsSlice.reducer;
