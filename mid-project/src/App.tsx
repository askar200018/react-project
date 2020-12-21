import React, { Fragment, Suspense, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Pages } from './pages';
import { Navbar } from './ui/navbar';

const App: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname, 'path name');
  return (
    <Fragment>
      <Suspense fallback={<h1>Loading Route ...</h1>}>
        {location.pathname !== '/signin' && location.pathname !== '/signup' && (
          <Navbar />
        )}
        <Pages />
      </Suspense>
    </Fragment>
  );
};

export default App;
