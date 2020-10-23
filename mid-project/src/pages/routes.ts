import { RouteConfig } from 'react-router-config';
import { Home } from './home';
import { paths } from './path';
import { Registration } from './registration/Registration';
import { Login } from './login/Login';
import CreateHome from './createHome/CreateHome';
import Rooms from '../features/rooms/Rooms';
import RoomsDetail from './roomsDetail/RoomsDetail';
import { path } from 'lodash/fp';

export const ROUTES: RouteConfig[] = [
  {
    path: paths.home(),
    exact: true,
    component: Home,
  },
  {
    path: paths.registration(),
    exact: true,
    component: Registration,
  },
  {
    path: paths.login(),
    exact: true,
    component: Login,
  },
  {
    path: paths.create(),
    exact: true,
    component: CreateHome,
  },
  {
    path: paths.roomDetail(':id'),
    exact: true,
    component: RoomsDetail,
  },
  {
    path: paths.rooms(),
    exact: true,
    component: Home,
  },
];
