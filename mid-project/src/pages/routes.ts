import { RouteConfig } from 'react-router-config';
import { Home } from './home';
import { paths } from './path';


export const ROUTES: RouteConfig[] = [
  {
    path: paths.home(),
    exact: true,
    component: Home,
  }
];
