import React from 'react'
import Nav from './nav'
import logo from '../assets/images/Logo.svg'

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo" />
        <h1>header</h1>
        <Nav></Nav>
    </header>
  )
}

export default Header