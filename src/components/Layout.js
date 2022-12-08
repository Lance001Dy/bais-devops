import React from 'react'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar />
        <div className='content '>
        { children }
        </div>
        <footer>
        <p>Copyright 2022 Brainwave Advertising & I.T Solutions</p>
        <p>Web Design by Lance Dyer</p>
        </footer>      
    </div>
  )
}
