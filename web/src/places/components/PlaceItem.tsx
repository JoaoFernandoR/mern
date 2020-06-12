import React from 'react'
import './PlaceItem.scss'

interface Props {
    id: string,
    title: string,
    description: string,
    imageUrl: string,
    address: string,
    location: {lat: number, long: number},
    creatorId: string
}

const PlaceItem = (props: Props) => {
    return (
        <div>
            hello from PlaceItem
        </div>
    )
}

export default PlaceItem