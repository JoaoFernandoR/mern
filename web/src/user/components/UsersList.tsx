import React from 'react'
import './UsersList.scss'
// Components
import UserItem from './UserItem'

interface Item {
    id : string,
    image: string,
    name: string,
    places: number,
}

interface Props {
    item : Item[],
}



const UsersList = ({item } : Props) => {
    
    const renderPages = () => {
        
        if (item.length === 0) 
            return <div> Não há usuários</div>

        return (
            item.map(user => (
            <UserItem 
            id={user.id} 
            image={user.image} 
            name={user.name} 
            places={user.places} 
            key={user.id}
            />) )
        )

    }

    return (
    <ul className="ul">
        {renderPages()}
    </ul>
    )
}

export default UsersList