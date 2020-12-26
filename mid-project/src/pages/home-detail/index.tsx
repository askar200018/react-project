import React, { ReactElement, useCallback, useEffect } from 'react';
import { House, Room } from 'features/rooms/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'reducers';
import { fetchRooms } from 'features/rooms/models/roomsSlice';
import { useRouteMatch } from 'react-router';
import { HousesRoomCard } from 'features/rooms/components';
import './home-detail.scss';
import { removeActiveUserRoom } from 'features/auth/models/activeUserSlice';

interface Props {}

export const HomeDetailPage = (props: Props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state: RootState) => state.activeUser);
  const match = useRouteMatch<{ houseId: string }>();
  const house = activeUser.houses.find((h) => h.id === +match.params.houseId);

  const handleRemove = useCallback(
    (roomId: number, houseId: number) =>
      dispatch(removeActiveUserRoom({ roomId, houseId })),
    [house?.rooms],
  );

  let rooms: Room[] = [];
  if (house) {
    rooms = house.rooms;
  }
  return (
    <div className="catalog-detail">
      <h3 className="catalog-detail__title">{house?.name}</h3>
      <div className="catalog-detail__row">
        {rooms.map((room, index) => {
          return (
            <div key={room.id} className="catalog-detail__item">
              <HousesRoomCard
                room={room}
                houseId={+match.params.houseId}
                onRemove={handleRemove}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeDetailPage;
