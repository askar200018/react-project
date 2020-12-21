import { RoomCard } from 'features/rooms/components';
import { fetchRooms } from 'features/rooms/models/roomsSlice';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { RootState } from 'reducers';
import './catalog-detail.scss';

interface Props {}

const CatalogDetail = (props: Props) => {
  const dispatch = useDispatch();
  const { rooms, isFetched, isLoading, error: roomsError } = useSelector(
    (state: RootState) => state.rooms,
  );
  const match = useRouteMatch<{ roomType: string }>();
  let matchRooms = rooms.filter(
    (room) => room.roomType === match.params.roomType,
  );
  console.log(matchRooms, match.params.roomType);
  useEffect(() => {
    if (!isFetched) {
      dispatch(fetchRooms());
    }
  }, []);

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
    matchRooms = rooms.filter(
      (room) => room.roomType === match.params.roomType,
    );
    return <h1 style={divStyle}>Loading ...</h1>;
  }

  return (
    <div className="catalog-detail">
      <h3 className="catalog-detail__title">{match.params.roomType}</h3>
      <div className="catalog-detail__row">
        {matchRooms.map((room, index) => {
          return (
            <div key={room.id} className="catalog-detail__item">
              <RoomCard room={room} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CatalogDetail;
