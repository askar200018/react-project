import {
  addActiveUserRoom,
  removeActiveUserRoom,
} from 'features/auth/models/activeUserSlice';
import React, { useEffect, useReducer, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from 'reducers';
import { Room } from '../types';
import styles from './RoomsItem.module.scss';
interface Props {
  index: number;
  room: Room;
  isAddedInitial: boolean;
  houseId: number;
}

const RoomsItem = ({ room, index, houseId, isAddedInitial }: Props) => {
  const dispatch = useDispatch();
  // console.log('isAddedState', isAddedState);

  const location = useLocation();
  const [isAdded, setIsAdded] = useState(isAddedInitial);
  const addRoom = (addedRoom: Room) => {
    dispatch(addActiveUserRoom({ room: addedRoom, houseId }));
    // console.log('isAddedState', isAddedState);
    setIsAdded(true);
  };
  const removeRoom = (removedRoom: Room) => {
    dispatch(removeActiveUserRoom({ roomId: removedRoom.id, houseId }));
    setIsAdded(false);
  };
  useEffect(() => {
    setIsAdded(false);
  }, [location]);
  return (
    <div className={styles.card}>
      <div className={styles.card_pic_wrap}>
        <Link to="/">
          <img src={room.imageUrl} alt="A leafy plant" />
        </Link>
      </div>
      <div className={styles.card_content}>
        {JSON.stringify(isAddedInitial)}
        <h3 className={styles.card_name}>{room.name}</h3>
        {!isAdded && (
          <button className={styles.room_btn} onClick={() => addRoom(room)}>
            Add
          </button>
        )}
        {isAdded && (
          <button
            className={styles.btn_remove}
            onClick={() => removeRoom(room)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomsItem;
