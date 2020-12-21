import { RouteConfig } from 'react-router-config';
import { lazy } from 'react';

import { paths } from './path';
import HomePage from './home';
//import { HomeDetailPage } from './homeDetail/index';

const HousesPage = lazy(() => import('./houses'));
const ContactsPage = lazy(() => import('./contacts'));
const RegistrationPage = lazy(() => import('./registration'));
const LoginPage = lazy(() => import('./login'));
const CreateHome = lazy(() => import('./createHome'));
const RoomsDetailPage = lazy(() => import('./roomsDetail'));
const MainPage = lazy(() => import('./main'));
const ProfilePage = lazy(() => import('./profile'));
const CatalogPage = lazy(() => import('./catalog'));
//const HomeDetailPage = lazy(() => import('./homeDetail'));

export const ROUTES: RouteConfig[] = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage,
  },
  {
    path: paths.registration(),
    exact: true,
    component: RegistrationPage,
  },
  {
    path: paths.login(),
    exact: true,
    component: LoginPage,
  },
  {
    path: paths.create(),
    exact: true,
    component: CreateHome,
  },
  {
    path: paths.roomDetail(':houseId', ':id'),
    exact: true,
    component: RoomsDetailPage,
  },
  {
    path: paths.rooms(),
    exact: true,
    component: HomePage,
  },
  {
    path: paths.contacts(),
    exact: true,
    component: ContactsPage,
  },
  {
    path: paths.main(),
    exact: true,
    component: MainPage,
  },
  {
    path: paths.profile(),
    exact: true,
    component: ProfilePage,
  },
  {
    path: paths.catalog(),
    exact: true,
    component: CatalogPage,
  },
  {
    path: paths.houses(),
    exact: true,
    component: HousesPage,
  },
  /*{
    path: paths.homeDetail(),
    exact: true,
    component: HomeDetailPage,
  }*/
];
