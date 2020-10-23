import React, { useState } from 'react';
import { Pages } from './pages';

import { useLocation } from 'react-router-dom';
import { Navbar } from './ui/navbar';
<!-- import { Footer } from './ui/footer';
=======
import { userList } from './api/user';
import { IsLoggedInContext } from './contexts/IsLoggedIn'; -->

export const App: React.FC = () => {
  const isLoggedFunction = (): boolean => {
    if (localStorage.getItem('loggedIn')) {
      return true;
    }
    return false;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedFunction);
  const location = useLocation();
  console.log(location.pathname, 'path name');

  React.useEffect(() => {
    // We'd get the theme from a web API / local storage in a real app
    // We've hardcoded the theme in our example
    setIsLoggedIn(isLoggedFunction);
  }, []);
  return (
    <>
      {location.pathname !== '/signin' &&
        location.pathname !== '/signup' &&
        location.pathname !== '/home' && 
        location.pathname !=='/contacts'&&<Navbar />}
      <Pages />
      {location.pathname !== '/home' && 
      location.pathname !== '/contacts' &&<Footer />}
      

      <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {location.pathname !== '/signin' && location.pathname !== '/signup' && <Navbar />}
        <Pages />
      </IsLoggedInContext.Provider>
    </>
  );
};
