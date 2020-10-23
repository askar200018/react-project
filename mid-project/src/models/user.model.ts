import { House } from './house.interface';
import { Profession } from './profession.enum';

export interface User {
  email: string;
  password: string;
  name: string;
  profession: Profession;
  houses?: House[];
}
