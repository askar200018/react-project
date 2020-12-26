import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRooms } from 'api/roomsAPI';
import { InitialRooms } from 'data/rooms.mock';
import { AppThunk } from 'store';
import { Comment, Room } from '../types';

interface RoomsState {
  isFetched: boolean;
  rooms: Room[];
  isLoading: boolean;
  error: string | null;
}

const initialState: RoomsState = {
  isFetched: false,
  rooms: [],
  isLoading: false,
  error: null,
};

function startLoading(state: RoomsState) {
  state.isLoading = true;
}

function loadingFailed(state: RoomsState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

let nextCommentId = 0;

const roomsSlice = createSlice({
  name: 'roomsSlice',
  initialState,
  reducers: {
    getRoomsStart: startLoading,
    getRoomsSuccess(state, { payload }: PayloadAction<Room[]>) {
      state.rooms = payload;
      state.isLoading = false;
      state.error = null;
      state.isFetched = true;
    },
    addRoomLike(state: RoomsState, action: PayloadAction<number>) {
      const { rooms } = state;
      const room = rooms.find((room) => room.id === action.payload);
      if (room) {
        room.like += 1;
      }
      state.rooms = rooms;
    },
    removeRoomLike(state: RoomsState, action: PayloadAction<number>) {
      const { rooms } = state;
      const room = rooms.find((room) => room.id === action.payload);
      if (room) {
        room.like -= 1;
      }
      state.rooms = rooms;
    },
    addComment: {
      reducer(
        state: RoomsState,
        action: PayloadAction<{ id: number; comment: Comment }>,
      ) {
        const { rooms } = state;
        const { id, comment } = action.payload;
        const room = rooms.find((room) => room.id === id);
        if (room) {
          room.comments.push(comment);
        }
        state.rooms = rooms;
      },
      prepare(id: number, comment: Comment) {
        return {
          payload: { id, comment: { ...comment, id: ++nextCommentId } },
        };
      },
    },
    removeComment(
      state: RoomsState,
      action: PayloadAction<{ id: number; commentId: number }>,
    ) {
      const { rooms } = state;
      const { id, commentId } = action.payload;
      const room = rooms.find((room) => room.id === id);
      if (room) {
        room.comments = room.comments.filter(
          (comment) => comment.id !== commentId,
        );
      }
      state.rooms = rooms;
    },
    getRoomsFailure: loadingFailed,
  },
});

export const {
  getRoomsStart,
  getRoomsSuccess,
  addRoomLike,
  removeRoomLike,
  addComment,
  removeComment,
  getRoomsFailure,
} = roomsSlice.actions;

export default roomsSlice.reducer;

export const fetchRooms = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getRoomsStart());
    const rooms = await getRooms();
    dispatch(getRoomsSuccess(rooms));
  } catch (err) {
    dispatch(getRoomsFailure(err.toString()));
  }
};
