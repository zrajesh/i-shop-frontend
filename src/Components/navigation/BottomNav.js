import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import list
import { brand, NavItems } from './BottomNavList';
// Import components
import HoverNav from './HoverNav';
// Import components
import SearchBox from './SearchBox';
// Import scss
import "./BottomNav.scss";

const BottomNav = () => {
    // State to display hover nav
    const [toggleDisplay, setToggleDisplay] = useState(false);
    // function to display hover nav
    const handleToggle = () => {
        setToggleDisplay(!toggleDisplay);
    }
    // Turns off hover nav when menu button is clicked
    const offToggle = () => {
        if (toggleDisplay === true) setToggleDisplay(false);
    }
    return (
        <nav>
        <div className="bottom-nav">
            <div className="top-wrap">
                <div className="brand">
                    <h1>{brand.name}</h1>
                </div>
                <div
                 className="menu-icon"
                 onClick={offToggle}
                 >
                    <label htmlFor="check">
                        <i className="menu-btn fas fa-bars"></i>
                    </label>
                </div>
            </div>

            <input type="checkbox" id="check" />
            <div className="nav-items">
            <SearchBox />
            {
                NavItems.map((item, index) => (
                    <div
                     key={index} 
                     className={"nav-item-div " + (item.name === "STORE" ? "hoverStore" : null)}
                     >
                        <Link 
                         to={item.to}
                         onClick={item.name === "STORE" ? handleToggle : null}
                         className="nav-item"
                        >
                        {item.name}
                        {
                        item.name === "STORE" ? 
                        <span className="listNavIcon"> &#9660;</span> 
                        : ""
                        }
                        </Link>
                    </div>
                ))
            }
            <HoverNav toggleDisplay={toggleDisplay} />
            </div>
        </div>
        </nav>
    );
};

export default BottomNav;
