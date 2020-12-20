export interface House {
  id: number;
  name: string;
  description: string;
  rooms: Room[];
}

export interface Room {
  name: string;
  description: string;
  like: number;
  imageUrl: string;
  cost: number;
  roomType: RoomType;
  comments: Comment[];
}

export enum RoomType {
  Bathroom = 'Bathroom',
  Bedroom = 'Bedroom',
  Toiletroom = 'Toiletroom',
  Livingroom = 'Livingroom',
  Kitchenroom = 'Kitchenroom',
  Kidsroom = 'Kidsroom',
}

export interface Comment {
  title: string;
  content: string;
  createdDate: Date;
}
