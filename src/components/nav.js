import React from 'react';
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav-links">
      <NavLink to='/'>Home </NavLink>
      <NavLink to='/menu'>Menu</NavLink>
      <NavLink to='/reservation'>Reservation</NavLink>
      <a href='/order-online'>Order Online</a>
      <a href='/login'>Login</a>
    </nav>
  )
}
