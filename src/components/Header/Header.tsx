import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className='head'>
            <div>
                <header className="header">
                    <a href="" className="logo">
                        <img src="./assets/images/logo.png" alt="" />
                    </a>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon" />
                    </label>
                    <ul className="menu">
                        <li>
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li>
                            <Link to={'/course'} >Courses</Link>
                        </li>
                        <li>
                            <Link to={'/careers'} >Careers</Link>
                        </li>
                        <li>
                            <Link to={'/blog'} >Blog</Link>
                        </li>
                        <li>
                            <Link to={'/contact'} >Contact</Link>
                        </li>
                        <li>
                            <Link to={'/login'} >Login</Link>
                        </li>
                    </ul>
                </header>

            </div>
            <div className='layout_off'>

            </div>
        </div>
    )
}
