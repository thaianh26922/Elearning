import React, { ReactNode } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer';
import './style.css';
interface DefaultLayoutProps {
    children: ReactNode;
}
export default function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <div className='layoutoff'>
        <div className='head'><Header></Header></div>
        <div className='contenting'>{children}</div>
        <div className='bot'><Footer></Footer></div>
    </div>
  )
}
