import { User } from '../models/user.model';

export const userList = (): any => localStorage.getItem('users');
export const userCreate = (user: User): boolean => {
  const users = JSON.parse(userList());
  if (users) {
    const check = users.find((u: User) => {
      return user.email === u.email;
    });
    console.log(check);
    if (!!check) {
      return false;
    } else {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
  } else {
    const newUsers = [];
    newUsers.push(user);
    localStorage.setItem('users', JSON.stringify(newUsers));
    return true;
  }
};
