import { RouteConfig } from 'react-router-config';
import { Home } from './home';
import { paths } from './path';
import { Registration } from './registration/Registration';
import { Login } from './login/Login';
import { Main } from './../ui/Main/Main';
import { Contacts } from './../ui/contacts/Contacts';

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
  { path: paths.main(), 
    exact: true, 
    component: Main 
  },

    { path: paths.contacts(), 
      exact: true, 
      component: Contacts,
    },
];
