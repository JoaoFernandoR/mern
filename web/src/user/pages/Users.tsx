import React from 'react'
import './Users.scss'
import UsersList from '../components/UsersList'

const USERS = [{
    id: 'u1',
    image: 'https://images.pexels.com/photos/2982149/pexels-photo-2982149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: "John Hernandez",
    places: 3
},{
    id: 'u2',
    image: 'https://images.pexels.com/photos/4006567/pexels-photo-4006567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: "John Hernandez",
    places: 3
}]

const Users: React.FC = () => {

    return (
    <div className="container">
        <UsersList item={USERS}/>
    </div>
    )
}

export default Users