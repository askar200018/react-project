import React, { Fragment, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Pages } from './pages';
import { Navbar } from './ui/navbar';
import { makeServer } from './server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const App: React.FC = () => {
  const location = useLocation();
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
