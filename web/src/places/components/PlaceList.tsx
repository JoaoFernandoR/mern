import React from 'react'
import './PlaceList.scss'
// Components
import PlaceItem from './PlaceItem'

interface Item {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    address: string,
    location: {lat: number, long: number},
    creatorId: string
}

interface Props {
    item : Item[],
}


const PlaceList = (props: Props) => {

    if (props.item.length === 0){
        return (
            <div>
                Não há lugares
            </div>
        )
    }

    
    return (
    <ul className="ul_places">        
        {props.item.map((place, index) => <PlaceItem 
        key={index}
        id={place.id}
        title={place.title}
        description={place.description}
        imageUrl={place.imageUrl}
        address={place.address}
        location={place.location}
        creatorId={place.creatorId}
        />)} 
    </ul>
    )
}

export default PlaceList