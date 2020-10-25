import React, { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Link } from 'react-router-dom';
import { useActiveUser } from '../../../contexts/ActiveUserContext';
import { Room } from '../../../models/room.model';
import styles from './RoomsItem.module.scss';
interface Props {
  index: number;
  room: Room;
  isAddedInitial: boolean;
  houseId: number;
}

const findRoom = (rooms: Room[], room: Room): boolean => {
  const check = rooms.find((r) => room.name === r.name);
  console.log(!!check, room, 'check');
  return !!check;
};

const RoomsItem = ({ room, index, houseId, isAddedInitial }: Props) => {
  // console.log(room, 'props room');
  const { activeUser, setActiveUser } = useActiveUser()!;
  const [isAdded, setIsAdded] = useState(isAddedInitial);
  console.log('isAddedInitial', isAddedInitial);
  const addRoom = (addedRoom: Room) => {
    activeUser.houses[houseId].rooms = [...activeUser.houses[houseId].rooms, addedRoom];
    // console.log('activeUser', activeUser);
    setActiveUser(activeUser);
    localStorage.setItem('activeUser', JSON.stringify(activeUser));
    setIsAdded(true);
  };
  const removeRoom = (removedRoom: Room) => {
    const roomIndex = activeUser.houses[houseId].rooms.findIndex(
      (r) => removedRoom.name === r.name,
    );
    activeUser.houses[houseId].rooms = [
      ...activeUser.houses[houseId].rooms.slice(0, roomIndex),
      ...activeUser.houses[houseId].rooms.slice(roomIndex + 1),
    ];
    // console.log('activeUser', activeUser);
    setActiveUser(activeUser);
    localStorage.setItem('activeUser', JSON.stringify(activeUser));
    setIsAdded(false);
  };
  useEffect(() => {
    setIsAdded(isAddedInitial);
  }, [isAddedInitial]);
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
          <button className={styles.btn_remove} onClick={() => removeRoom(room)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default RoomsItem;
