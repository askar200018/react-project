import { House } from 'features/rooms/types';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  profession: Profession;
  houses: House[];
}
export enum Profession {
  Designer = 'Designer',
  Developer = 'Developer',
  User = 'User',
}
