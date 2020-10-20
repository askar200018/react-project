import React from 'react';
import { Pages } from './pages';

import { useLocation } from 'react-router-dom';

export const App: React.FC = () => {
  let location = useLocation();
  console.log(location.pathname, 'path name');
  return <Pages />;
};
