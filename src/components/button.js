import React from 'react'
import '../assets/css/button.css';

const Button = props => {
  return (
    <button aria-label="On Click">{props.children}</button>
  )
}

export default Button