import React from 'react';
import styles from './Catalog.module.scss';
import { Link } from 'react-router-dom';
import { RoomType } from 'features/rooms/types';
import bathRoom from './images/bath-room.jpg';
import bedRoom from './images/bed-room.jpg';
import kidsRoom from './images/kids-room.jpg';
import kitchenRoom from './images/kitchen-room.jpg';
import livingRoom from './images/living-room.jpg';
import toiletRoom from './images/toilet-room.jpg';

interface Props {}
interface Catalog {
  imgUrl: string;
  name: string;
  type: RoomType;
}

const categories: Catalog[] = [
  {
    imgUrl: kitchenRoom,
    name: 'Kitchen Room',
    type: RoomType.Kitchenroom,
  },
  {
    imgUrl: livingRoom,
    name: 'Living Room',
    type: RoomType.Livingroom,
  },
  {
    imgUrl: bathRoom,
    name: 'Bath Room',
    type: RoomType.Bathroom,
  },
  {
    imgUrl: bedRoom,
    name: 'Bed Room',
    type: RoomType.Bedroom,
  },
  {
    imgUrl: toiletRoom,
    name: 'Toilet Room',
    type: RoomType.Toiletroom,
  },
  {
    imgUrl: kidsRoom,
    name: 'Kids Room',
    type: RoomType.Kidsroom,
  },
];
export const CatalogPage = (props: Props) => {
  return (
    <div className={styles.rooms}>
      <h1 className={styles.title}>All Cateogories</h1>
      <div className={styles.wrap}>
        {categories.map((room, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.card_pic_wrap}>
                <Link to={`/catalog/${room.type}`}>
                  <img src={room.imgUrl} alt="A leafy plant" />
                </Link>
              </div>
              <div className={styles.card_content}>
                <h3 className={styles.card_name}>{room.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CatalogPage;
