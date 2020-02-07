import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom'
 
const Nav = (props) =>{
    return(
        <nav className="top-bar">
        <div className="logo std-width" style={{display:'inline-block'}}>
            <Link to="/">{props.title}</Link>
            </div> 
        <div style={{display:'inline-block'}}>
            <Link to="/user">Get Users</Link></div> 
        </nav>
    )
}

export default Nav;