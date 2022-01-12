import React from "react";
import { NavLink } from 'react-router-dom';

const Header =()=> {
    const links = [
        {
            id: 1,
            path: "/",
            text: "Home"
        },
        {
            id: 2,
            path: "/calculator",
            text: "Calculator"
        },
        {
            id: 3,
            path: "/quote",
            text: "Quote"
        }
    ]

    return (
        <header className="header">
            <h1>Math Magicians</h1>
        <nav>
        <ul className="nav-menu">
           {
               links.map((link) => (
                   <li key={link.id} className="nav-item">
                       <NavLink to={link.path} className="nav-item">{link.text}</NavLink>
                   </li>
                ) )
           }
        </ul>
        </nav>
        </header>
    );
}

export default Header;