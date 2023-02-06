import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <a href='/home'>Home</a>
                <a href='/about'>About</a>
                <a href='/menu'>Menu</a>
                <a href='/reservation'>Reservation</a>
                <a href='/order-online'>Order Online</a>
                <a href='/login'>Login</a>

            {/* <Link to={'/home'}>Home</Link> */}
            </li>
        </ul>
    </nav>
  )
}
