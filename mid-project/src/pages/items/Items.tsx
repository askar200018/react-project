import React from 'react'
import {items} from './Products'

interface Props {
    items:Item[]
}
export enum RoomType{
    Bathroom,
    Bedroom,
    Toiletroom,
    Livingroom,
    Kitchenroom,
    Kidsroom
}
export interface Item{
    name: string;
    description: string;
    cost: number;
    like: number;
    imageUrl: string;
    comments: Comment[];
    roomType:RoomType;
}
export const Items = ({items}: Props) => {
    return (
        <ul>
            {items.map(function(item, index){
                return <li key={index}>{name}</li>;
                })}
        </ul>
    )
}
