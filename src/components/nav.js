import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <a href='/home'>Home</a>{/* <Link to={'/home'}>Home</Link> */}
            </li>
            <li><a href='/about'>About</a></li>
            <li><a href='/menu'>Menu</a></li>
            <li><a href='/reservation'>Reservation</a></li>
            <li><a href='/order-online'>Order Online</a></li>
            <li><a href='/login'>Login</a></li>
        </ul>
    </nav>
  )
}
