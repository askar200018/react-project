import React, { useMemo, useState } from 'react';
import { Room } from '../types';
import './rooms.scss';

import { HeartOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addRoomLike, removeRoomLike } from '../models/roomsSlice';

interface Props {
  room: Room;
}

export const RoomCard = ({ room }: Props) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const addLike = () => {
    dispatch(addRoomLike(room.id));
    setIsLiked(true);
  };
  const removeLike = () => {
    dispatch(removeRoomLike(room.id));
    setIsLiked(false);
  };
  return (
    <div className="room-card">
      <div className="room-card__header">
        <img
          className="room-card__image"
          src={room.imageUrl}
          alt="Room Image"
        />
      </div>
      <div className="room-card__body">
        <h3 className="room-card__title">{room.name}</h3>
        <p className="room-card__description">{room.description}</p>
      </div>
      <div className="room-card__footer">
        <p className="room-card__like">{room.like}</p>
        {isLiked && (
          <HeartOutlined
            className="room-card__icon"
            style={{ color: 'red' }}
            onClick={() => removeLike()}
          />
        )}
        {!isLiked && (
          <HeartOutlined
            className="room-card__icon"
            onClick={() => addLike()}
          />
        )}
      </div>
    </div>
  );
};
