import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router';
import { RoomsContext } from '../../App';
import Rooms from '../../features/rooms/Rooms';
import { RoomType } from '../../models/room.model';

interface Props {}

const getRoomType = (name: string): RoomType => {
  switch (name) {
    case 'Bathroom':
      return RoomType.Bathroom;
    case 'Bedroom':
      return RoomType.Bedroom;
    case 'Toiletroom':
      return RoomType.Toiletroom;
    case 'Livingroom':
      return RoomType.Livingroom;
    case 'Kitchenroom':
      return RoomType.Kitchenroom;
    case 'Kidsroom':
      return RoomType.Kidsroom;
    default:
      return RoomType.Bathroom;
  }
};

const getNextLink = (name: string): string => {
  switch (name) {
    case 'Bathroom':
      return 'Bedroom';
    case 'Bedroom':
      return 'Toiletroom';
    case 'Toiletroom':
      return 'Livingroom';
    case 'Livingroom':
      return 'Kitchenroom';
    case 'Kitchenroom':
      return 'Kidsroom';
    case 'Kidsroom':
      return '';
    default:
      return '';
  }
};

const RoomsDetail = (props: Props) => {
  console.log('new rooms');
  const match = useRouteMatch<{ id: string }>();
  const roomName = match.params.id;
  const roomType = getRoomType(roomName);
  const rooms = useContext(RoomsContext);
  const newRooms = rooms.filter((room) => room.roomType === roomType);
  console.log(rooms, 'new rooms');
  return (
    <div>
      <Rooms rooms={newRooms} name={roomName} link={getNextLink(roomName)} />
    </div>
  );
};

export default RoomsDetail;
