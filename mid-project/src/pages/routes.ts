import { RouteConfig } from 'react-router-config';
import { Home } from './home';
import { paths } from './path';
import { Registration } from './registration/Registration';
import { Login } from './login/Login';

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
