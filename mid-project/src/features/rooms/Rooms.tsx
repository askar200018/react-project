import React from 'react';
import { Link } from 'react-router-dom';
import { getActiveHouse } from '../../api/activeHouse';
import { useActiveUser } from '../../contexts/ActiveUserContext';
import { Room } from '../../models/room.model';
import styles from './Rooms.module.scss';
interface Props {
  rooms: Room[];
  name: string;
  link: string;
}

const Rooms = ({ rooms, name, link }: Props) => {
  const { activeUser, setActiveUser } = useActiveUser()!;

  // useEffect(() => {

  //   return () => {
  //     cleanup
  //   }
  // }, [localRooms, setLocalRooms])

  const addRoom = (room: Room) => {
    if (!activeUser.houses) {
      activeUser.houses = [];
    }
    const houses = activeUser.houses;
    const index = getActiveHouse();
    if (houses[index - 1].rooms) {
      // houses[index - 1].rooms = [];
      // houses[index - 1].rooms.push(room);
    }
  };
  console.log(activeUser, 'activeUSEr');
  return (
    <div className={styles.rooms}>
      <h1 className={styles.title}>{name}</h1>
      <div className={styles.wrap}>
        {rooms.map((room, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.card_pic_wrap}>
                <Link to="/">
                  <img src={room.imageUrl} alt="A leafy plant" />
                </Link>
              </div>
              <div className={styles.card_content}>
                <h3 className={styles.card_name}>{room.name}</h3>
                <button className={styles.room_btn} onClick={() => addRoom(room)}>
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.rooms_link}>
        <Link to={`/rooms/${link}`}>Next</Link>
      </div>
    </div>
  );
};

export default Rooms;
