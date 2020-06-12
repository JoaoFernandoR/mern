import React from 'react'
import "./Avatar.scss"

interface Props {
    image: string,
    alt: string,
    className?: string,
    style?: {},
    width?: string,
    height?: string,
}

const Avatar = (props: Props) => {
    return (
    <div className={`avatar ${props.className}`} style={props.style}>
        <img src={props.image} 
        alt={props.alt}
        style={{width: props.width, height: props.height}}/>
    </div>
    )
}

export default Avatar