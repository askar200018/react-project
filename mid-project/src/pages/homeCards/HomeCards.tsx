import React, { ReactElement } from 'react'
interface Props {
    cards:Card[]
}
export interface Card{
    imageUrl: string;
    name: string;
}

export default function HomeCards({cards}: Props): ReactElement {
    return (
        <div>
            <ul>
                {cards.map(function(card){
                    return <div> 
                                <img src={card.imageUrl} className="pics" width="300" height="300" />
                        </div>
                    })}
            </ul>
        </div>
    )
}
