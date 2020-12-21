import React, { Fragment, Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Pages } from './pages';
import { Navbar } from './ui/navbar';
import { InitialRooms } from './data/rooms.mock';

export const RoomsContext = React.createContext(InitialRooms);

const App: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname, 'path name');
  return (
    <Fragment>
      <RoomsContext.Provider value={InitialRooms}>
        <Suspense fallback={<h1>Loading Route ...</h1>}>
          {location.pathname !== '/signin' &&
            location.pathname !== '/signup' && <Navbar />}
          <Pages />
        </Suspense>
      </RoomsContext.Provider>
    </Fragment>
  );
};

export default App;
