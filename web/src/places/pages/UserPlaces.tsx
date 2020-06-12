import React from 'react'
import './UserPlaces.scss'
// Components
import PlaceList from '../components/PlaceList'

const PLACES = [{
    id: 'p1',
    title: "Empire State Building",
    description: "The most famous building in the world",
    imageUrl: "https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    location: {lat: 40.7481519, long: -73.9862223},
    creatorId: 'u1'
},
{
    id: 'p2',
    title: "Empire State Building",
    description: "The most famous building in the world",
    imageUrl: "https://images.pexels.com/photos/472037/pexels-photo-472037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    location: {lat: 40.7481519, long: -73.9862223},
    creatorId: 'u2'
}]

const UserPlaces = () => {
    return (
        <div>
            <PlaceList item={PLACES}/>
        </div>
    )
}

export default UserPlaces