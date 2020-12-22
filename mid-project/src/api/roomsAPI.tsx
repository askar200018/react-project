import axios from 'axios';
import { User } from 'features/auth/types';
import { Room } from 'features/rooms/types';

interface UserResponse {
  rooms: Room[];
}

export async function getRooms() {
  const url = `/api/rooms`;

  const { data } = await axios.get<UserResponse>(url);
  return data.rooms;
}
