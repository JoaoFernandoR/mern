import React from 'react'
import {NavLink} from 'react-router-dom'
import './SideBar.scss'

const SideBar = props => {

    const {handleSideBar} = props

    return (
    <React.Fragment>
        <div className="backdrop" onClick={handleSideBar}></div>
        <div className="sidebar">
            <ul> 
                <li>
                   <NavLink to="/" exact={true} activeClassName="active" onClick={handleSideBar}>
                       All Users
                       <div className="line"></div>
                   </NavLink> 
                </li>
                <li>
                   <NavLink to="/u1/places" activeClassName="active" onClick={handleSideBar}>
                       My Places
                       <div className="line"></div>
                   </NavLink> 
                </li>
                <li>
                   <NavLink to="/places/new" activeClassName="active" onClick={handleSideBar}>
                       Add Place
                       <div className="line"></div>
                   </NavLink> 
                </li>
                <li>
                   <NavLink to="/auth" activeClassName="active" onClick={handleSideBar}>
                       Authenticate
                       <div className="line"></div>
                   </NavLink> 
                </li>
            </ul>
        </div>
    </React.Fragment>
    )
}

export default SideBar