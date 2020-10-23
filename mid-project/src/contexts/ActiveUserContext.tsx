import React from 'react';
import { User } from '../models/user.model';
type ActiveUserType = {
  activeUser: User;
  setActiveUser: (user: User) => void;
};

export const ActiveUserContext = React.createContext<ActiveUserType | null | undefined>(undefined);

export const useActiveUser = () => React.useContext(ActiveUserContext);
