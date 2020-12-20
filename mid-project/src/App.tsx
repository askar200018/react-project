import React, { Fragment, Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Pages } from './pages';
import { Navbar } from './ui/navbar';
import { getActiveUser, userList } from './api/user';
import { IsLoggedInContext } from './contexts/IsLoggedIn';
import { InitialRooms } from './data/rooms.mock';
import { ActiveUserContext } from './contexts/ActiveUserContext';

export const RoomsContext = React.createContext(InitialRooms);

export const App: React.FC = () => {
  console.log('initial rooms', userList());
  const isLoggedFunction = (): boolean => {
    if (localStorage.getItem('loggedIn')) {
      return true;
    }
    return false;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedFunction);
  const [activeUser, setActiveUser] = useState(JSON.parse(getActiveUser()));
  const location = useLocation();
  console.log(location.pathname, 'path name');
  React.useEffect(() => {
    // We'd get the theme from a web API / local storage in a real app
    // We've hardcoded the theme in our example
    setIsLoggedIn(isLoggedFunction);
  }, []);
  return (
    <Fragment>
      <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
          <RoomsContext.Provider value={InitialRooms}>
            {location.pathname !== '/signin' &&
              location.pathname !== '/signup' && <Navbar />}
            <Suspense fallback={<h1>Loading Route ...</h1>}>
              <Pages />
            </Suspense>
          </RoomsContext.Provider>
        </ActiveUserContext.Provider>
      </IsLoggedInContext.Provider>
    </Fragment>
  );
};
