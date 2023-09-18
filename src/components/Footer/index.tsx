import React from 'react'
import './style.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className='top'>
                <div><img src="./assets/images/logo.png" alt="" /></div>
                <span>Virtual Class for Zoom</span>
        </div>
        <div className='mid'>
            <p>Subscribe to get our Newsletter</p>
            <div>
                <input type="email" name="" id="" placeholder='Your email'/>
                <button>Subcribes</button>
            </div>
        </div>
        <div className='bottom'>
            <div>
                <ul>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
                <span>© 2021 Class Technologies Inc.</span>
            </div>
        </div>
    </div>
  )
}
