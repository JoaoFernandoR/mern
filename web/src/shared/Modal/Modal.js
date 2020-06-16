import React from 'react'
import './Modal.scss'
import Button from '../../shared/Button/Button'
import { Map, TileLayer, Marker } from 'react-leaflet';

const Modal = (props) => {

    const {handleModal, children, location} = props

    return (
    <React.Fragment>
        <div className="backdrop" onClick={handleModal}></div>
        <div className="mymodal">
            <div className="modal_top">
                {children}
            </div>
            <div className="modal_content">
                <Map center={[location.lat, location.long]} zoom={15} className="mapa">
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[location.lat, location.long]} />
                </Map> 
            </div>
            <div className="modal_button">
                <Button inverse onClick={handleModal}> Close </Button>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Modal