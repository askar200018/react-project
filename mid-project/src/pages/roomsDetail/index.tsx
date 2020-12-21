import { fetchRooms } from 'features/rooms/models/roomsSlice';
import Rooms from 'features/rooms/Rooms';
import { RoomType } from 'features/rooms/types';
import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { RootState } from 'reducers';

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

const RoomsDetailPage = (props: Props) => {
  const dispatch = useDispatch();
  const { rooms, isLoading, error: roomsError, isFetched } = useSelector(
    (state: RootState) => state.rooms,
  );

  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchRooms());
    }
  }, []);
  // console.log('new rooms');
  const match = useRouteMatch<{ houseId: string; id: string }>();
  const roomName = match.params.id;
  const roomType = getRoomType(roomName);
  const newRooms = rooms.filter((room) => room.roomType === roomType);
  const divStyle = {
    color: 'blue',
    marginTop: '300px',
  };
  if (roomsError) {
    console.log('roomsErrror');
    return (
      <div style={divStyle}>
        <h1>Something went wrong...</h1>
        <div>{roomsError.toString()}</div>
      </div>
    );
  }

  if (isLoading) {
    return <h1 style={divStyle}>Loading ...</h1>;
  }

  return (
    <div>
      <Rooms
        rooms={newRooms}
        name={roomName}
        link={getNextLink(roomName)}
        houseId={+match.params.houseId}
      />
    </div>
  );
};

export default RoomsDetailPage;
