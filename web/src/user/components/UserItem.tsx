import React from 'react'
import {Link} from 'react-router-dom'
import Avatar from '../../shared/Avatar/Avatar'
import './UserItem.scss'

interface Props {
    id: string,
    image: string,
    name: string,
    places: number
}

const UserItem = (props: Props) => {

    const {id, image, name, places} = props
    
    return (
    <li>
        <Link to={`/${id}/places`}>
            <Avatar image={image} alt={name}/>
            <h2> {name} </h2>
            <h3> {places} places</h3>
        </Link>
    </li>
    )
}

export default UserItem