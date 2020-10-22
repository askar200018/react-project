import React from 'react';
import { Pages } from './pages';

import { useLocation } from 'react-router-dom';
import { Navbar } from './ui/navbar';

export const App: React.FC = () => {
  let location = useLocation();
  console.log(location.pathname, 'path name');
  return (
    <>
      {location.pathname !== '/signin' && location.pathname !== '/signup' && <Navbar />}
      <Pages />
    </>
  );
};
