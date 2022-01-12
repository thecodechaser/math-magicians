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
        <header>
            <h1>Math Magicians</h1>
        <nav>
        <ul>
           {
               links.map((link) => (
                   <li key={link.id}>
                       <NavLink to={link.path}>{link.text}</NavLink>
                   </li>
                ) )
           }
        </ul>
        </nav>
        </header>
    );
}

export default Header;