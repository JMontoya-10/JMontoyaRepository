import React from "react";
import './Header.css';
import Menu from '../menu/Menu.js';

const Header = () => {
    return (
        <div className= 'header-Container'>
            <a href="/"><div className="Logo"/></a>
            <Menu/>
        </div>
    )
}

export default Header