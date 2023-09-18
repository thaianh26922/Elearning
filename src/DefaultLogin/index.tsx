import React, { ReactNode } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
interface DefaultLayoutProps {
    children: ReactNode;
}
export default function DefaultLogin({ children }: DefaultLayoutProps) {
    return (
        <div className='log-big-page'>
            <div className='log-page'>
                <div className='log-page-banner'>
                    <img src="./assets/images/login.png" alt="" />
                </div>
                <div className='content-login'>
                    <h3>Welcome to E Learn..!</h3>
                    <div className='choose-form'>
                        <div>
                            <Link className='link' to={'/login'} >Login</Link>
                            <Link className='link' to={'/register'}>Register</Link>
                        </div>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    {children}
                </div>
            </div>
        </div>
    )
}
