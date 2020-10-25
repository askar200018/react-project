import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getActiveHouse } from '../../api/activeHouse';
import { useActiveUser } from '../../contexts/ActiveUserContext';
import { Room } from '../../models/room.model';
import RoomsItem from './components/RoomsItem';
import styles from './Rooms.module.scss';
interface Props {
  rooms: Room[];
  houseId: number;
  name: string;
  link: string;
}

const Rooms = ({ rooms, name, link, houseId }: Props) => {
  const { activeUser, setActiveUser } = useActiveUser()!;
  const [isAddedRooms, setIsAddedRooms] = useState([]);

  return (
    <div className={styles.rooms}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.wrap}>
        {rooms.map((room, index) => {
          return <RoomsItem room={room} index={index} houseId={houseId} isAddedInitial={false} />;
        })}
      </div>
      <div className={styles.rooms_link}>
        <Link to={`/rooms/${houseId}/${link}`}>Next</Link>
      </div>
    </div>
  );
};

export default Rooms;
