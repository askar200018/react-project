import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import RoomsItem from './components/RoomsItem';
import styles from './Rooms.module.scss';
import { Room } from './types';
interface Props {
  rooms: Room[];
  houseId: number;
  name: string;
  link: string;
}

const Rooms = ({ rooms, name, link, houseId }: Props) => {
  const [isAddedRooms, setIsAddedRooms] = useState([]);

  return (
    <div className={styles.rooms}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.wrap}>
        {rooms.map((room, index) => {
          return (
            <Fragment key={room.id}>
              <RoomsItem
                room={room}
                index={index}
                houseId={houseId}
                isAddedInitial={false}
              />
            </Fragment>
          );
        })}
      </div>
      <div className={styles.rooms_link}>
        {link === '' && <Link to={`${link}`}>Done</Link>}
        {link !== '' && <Link to={`/rooms/${houseId}/${link}`}>Next</Link>}
      </div>
    </div>
  );
};

export default Rooms;
