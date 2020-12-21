import React, { ReactElement } from 'react'
import { House, Room } from 'features/rooms/types';
interface Props {
    house: House[],
    rooms:Room[]
}

export const HomeDetailPage = ({house, rooms}: Props) => {
    
    /*return (
        <div>
            <div className="container__body">
                <div className="container__header">
                    <div className="container__title.title">DETAILS</div>
                    <div className="container__information"></div>
                </div>
                <div className="container__items">
                    {house.rooms.map( (room, id) => {
                    return <div key={id}>
                        {room.name}
                    </div>
                    })}
                </div>
            </div>
        </div>
    )*/
}
export default HomeDetailPage;