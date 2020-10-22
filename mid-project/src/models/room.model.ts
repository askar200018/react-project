import { Comment } from './comment.model';

export interface Room {
  name: string;
  description: string;
  like: number;
  imageUrl: string;
  price: number;
  type: RoomType;
  comments: Comment[];
}

enum RoomType {
  'BATHROOM',
}
