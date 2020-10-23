import { House } from '../models/house.interface';

export const getActiveHouse = (): number => {
  if (localStorage.getItem('activeUser')) {
    localStorage.getItem('activeUser');
  }
  return 1;
};
export const setActiveHouse = (houseId: number) =>
  localStorage.setItem('activeHouse', JSON.stringify(houseId));
