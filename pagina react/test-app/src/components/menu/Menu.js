import React from "react";
import "./Menu.css";

const Menu = () => {
    return(
        <div className="menu-Container">
            <ul className="menu-List">
                <li className="menu-Item"><a href="/">Home</a></li>
                <li className="menu-Item"><a href="/Merchandise">Merchandise</a></li>
                <li className="menu-Item"><a href="/Auction">Auction</a></li>
            </ul>
        </div>
    )
}

export default Menu;