import { Room } from './room.model';

export interface House {
  name: string;
  description: string;
  rooms?: Room[];
}