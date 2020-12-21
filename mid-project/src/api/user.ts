import { User } from 'features/auth/types';
import initialUsers from '../data/users.json';

const users: any[] = initialUsers;

export const userList = (): User[] => users;
export const userCreate = (user: User): boolean => {
  const users = userList();
  const check = users.find((u: User) => {
    return user.email === u.email;
  });
  if (check) {
    return false;
  } else {
    users.push(user);
    return true;
  }
};

export const getActiveUser = (): any => {
  if (localStorage.getItem('activeUser')) {
    return localStorage.getItem('activeUser');
  }
  return null;
};
