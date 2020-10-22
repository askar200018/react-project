import React from 'react';
type IsLoggedInType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

export const IsLoggedInContext = React.createContext<IsLoggedInType | undefined>(undefined);
