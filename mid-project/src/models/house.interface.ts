import { Room } from './room.model';

export interface House {
  id: number;
  name: string;
  description: string;
  rooms: Room[];
}
