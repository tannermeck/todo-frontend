import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/signin">Sign-in</NavLink>
            <NavLink to="/signup">Sign-up</NavLink>
            </div>
         );
    }
}
 
export default Header;