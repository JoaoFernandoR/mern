import React, {useState} from 'react'
import Button from '../../shared/Button/Button'
import Modal from '../../shared/Modal/Modal'
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

    const [isModal, setIsModal] = useState(false)

    const handleModal = () => {
        setIsModal(!isModal)
    }

    return (
    <React.Fragment>
        {isModal ? <Modal handleModal={handleModal} location={props.location}>{props.address}</Modal> : null}
        <li className="places_list">
            <div className="img_container">
                <img src={props.imageUrl} alt={props.title}/>
            </div>
            <div className="info_box">
                <h2>{props.title}</h2>
                <h3>{props.address}</h3>
                <p>{props.description}</p>
            </div>
            <div className="buttons">
                <Button inverse onClick={handleModal}> VIEW ON MAP </Button>
                <Button to={`/places/${props.id}`}> EDIT </Button>
                <Button danger> DELETE </Button>
            </div>
        </li>
    </React.Fragment>
    )
}

export default PlaceItem