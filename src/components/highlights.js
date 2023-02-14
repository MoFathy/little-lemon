import React from 'react'
import Button from './button'
import '../assets/css/highlights.css'
import bruchetta from '../assets/images/bruchetta.svg'

function Highlights() {
  return (
    <section className='highlights'>
        <div className='container'>
            <header >
                <h3>This weeks specials!</h3>
                <Button>Online menu</Button>
            </header>
            <div className='content'>
                <div className='card'>
                    <img src={bruchetta} alt="bruchetta"/>
                    <div className='card-header'>
                        <h5 className='title'>bruchetta</h5>
                        <span>$15</span>
                    </div>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='footer'>
                        <p>Order a delivery</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={bruchetta} alt="bruchetta"/>
                    <div className='card-header'>
                        <h5 className='title'>bruchetta</h5>
                        <span>$15</span>
                    </div>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='footer'>
                        <p>Order a delivery</p>
                    </div>
                </div>
                <div className='card'>
                    <img src={bruchetta} alt="bruchetta"/>
                    <div className='card-header'>
                        <h5 className='title'>bruchetta</h5>
                        <span>$15</span>
                    </div>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='footer'>
                        <p>Order a delivery</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Highlights