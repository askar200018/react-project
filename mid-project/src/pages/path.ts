import { RoomType } from 'features/rooms/types';

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const paths = {
  home: () => '/',
  registration: () => '/signup',
  login: () => '/signin',
  create: () => '/create',
  rooms: () => '/rooms',
  roomDetail: (houseId: string, id: string) => `/rooms/${houseId}/${id}`,
  company: () => '/company',
  contacts: () => '/contacts',
  main: () => '/main',
  profile: () => '/profile',
  catalog: () => '/catalog',
  catalogDetail: (roomType: string) => `/catalog/${roomType}`,
  houses: () => '/houses',
  //homeDetail: () => '/detail',
  /**
   * @example
   * user: (username = ':username') => `/@${username}`,
   */
};
