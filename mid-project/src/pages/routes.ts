import { RouteConfig } from 'react-router-config';
import { Home } from './home';
import { paths } from './path';
import { Registration } from './registration/Registration';
import { Login } from './login/Login';
import { Items } from './items/Items';

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
  
];
