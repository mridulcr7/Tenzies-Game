import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <nav>
        <Link to="/body">Mridul</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Logout</Link>
        </nav>
    </div>
  )
}

export default Header