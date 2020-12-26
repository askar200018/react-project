import React, { useMemo, useState } from 'react';
import { Room } from '../types';
import './rooms.scss';

import {
  CloseCircleOutlined,
  DeleteOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addRoomLike, removeRoomLike } from '../models/roomsSlice';
import { removeActiveUserRoom } from 'features/auth/models/activeUserSlice';

interface Props {
  room: Room;
  houseId: number;
  onRemove: (roomId: number, houseId: number) => void;
}

export const HousesRoomCard = ({ room, houseId, onRemove }: Props) => {
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

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
        <p className="room-card__like">Delete</p>
        <DeleteOutlined
          className="room-card__icon"
          onClick={() => onRemove(room.id, houseId)}
        />
      </div>
    </div>
  );
};
