import React from 'react';
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/menu'>Menu</NavLink></li>
            <li><a href='/reservation'>Reservation</a></li>
            <li><a href='/order-online'>Order Online</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
    </nav>
  )
}
