import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar">
         <div className="navbar-container">
            <Link to="/" navbar-logo>
               TRVL
            </Link> 
         </div>
      </nav>
    </>
  )
}

export default Navbar
