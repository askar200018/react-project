import React from 'react';
import './List.scss';
interface Props {
  items: Item[];
}
export enum RoomType {
  Bathroom = 'Bathroom',
  Bedroom = 'Bedroom',
  Toiletroom = 'Toiletroom',
  Livingroom = 'Livingroom',
  Kitchenroom = 'Kitchenroom',
  Kidsroom = 'Kidsroom',
}
export interface Item {
  name: string;
  description: string;
  cost: number;
  like: number;
  imageUrl: string;
  comments: Comment[];
  roomType: RoomType;
}
export const Items = ({ items }: Props) => {
  return (
    <ul>
      {items.map(function (item, index) {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
};
