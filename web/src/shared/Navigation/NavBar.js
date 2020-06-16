import React, {useState} from 'react'
import { FiAlignJustify } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
// CSS
import './NavBar.scss'
//Components
import SideBar from './SideBar'

const NavBar = () => {

    const [isMobile, setIsMobile] = useState(false)

    const handleSideBar = () => {
        setIsMobile(!isMobile)
    }

    return(
    <React.Fragment>
        { isMobile && <SideBar handleSideBar={handleSideBar}/>}
        <div className="navbar">
            <div className="icon_box">
                <FiAlignJustify size="3em" className="icon" onClick={handleSideBar}/>
                <Link to="/">
                    <p> Your Places</p>
                </Link>
            </div>
            <ul> 
                <li>
                   <NavLink to="/" exact={true} activeClassName="active">
                       All Users
                       <div className="line"></div>
                   </NavLink> 
                </li>
                <li>
                   <NavLink to="/u1/places" activeClassName="active">
                       My Places
                       <div className="line"></div>
                   </NavLink> 
                </li>
                <li>
                   <NavLink to="/places/new" activeClassName="active">
                       Add Place
                       <div className="line"></div>
                   </NavLink> 
                </li>
                <li>
                   <NavLink to="/auth" activeClassName="active">
                       Authenticate
                       <div className="line"></div>
                   </NavLink> 
                </li>
            </ul>
        </div>
    </React.Fragment>
    )
}

export default NavBar