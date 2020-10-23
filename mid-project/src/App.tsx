import React, { useState } from 'react';
import { Pages } from './pages';

import { useLocation } from 'react-router-dom';
import { Navbar } from './ui/navbar';
import { getActiveUser } from './api/user';
import { IsLoggedInContext } from './contexts/IsLoggedIn';
import { InitialRooms } from './data/rooms.mock';
import { ActiveUserContext } from './contexts/ActiveUserContext';
import { Footer } from './ui/footer/Footer';

export const RoomsContext = React.createContext(InitialRooms);

export const App: React.FC = () => {
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
    <>
      <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
          <RoomsContext.Provider value={InitialRooms}>
            {location.pathname !== '/signin' && location.pathname !== '/signup' && <Navbar />}
            <Pages />
            {location.pathname !== '/signin' && location.pathname !== '/signup' && <Footer />}
          </RoomsContext.Provider>
        </ActiveUserContext.Provider>
      </IsLoggedInContext.Provider>
    </>
  );
};
