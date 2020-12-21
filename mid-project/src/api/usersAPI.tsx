import axios from 'axios';
import { User } from 'features/auth/types';

interface UserResponse {
  users: User[];
}

export async function getUsers() {
  const url = `/api/users`;

  const { data } = await axios.get<UserResponse>(url);
  return data.users;
}
