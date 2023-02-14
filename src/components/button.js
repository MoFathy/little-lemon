import React from 'react'
import '../assets/css/button.css';

const Button = props => {
  return (
    <button>{props.children}</button>
  )
}

export default Button