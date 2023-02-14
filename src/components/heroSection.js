import React from 'react'
import '../assets/css/heroSection.css'
import Button from './button'
import restauranFoodImage from '../assets/images/restauranfood.jpg'

const HeroSection = () => {
  return (
    <section className='heroSection'>
      <div className='container'>
        <div className=' textPart'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <Button>Reserve a Table</Button>
        </div>
          <img src={restauranFoodImage} alt="restaurant Food" />
      </div>
    </section>
  )
}

export default HeroSection