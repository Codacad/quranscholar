import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { Menu } from '@mui/icons-material'

const Navbar = () => {

  const handleSidenavOpen = () => {
    document.querySelector('.sidenav-wrapper').classList.add('sidenav-wrapper-toggle')
    document.querySelector('.sidenav').classList.add('sidenav-toggle')
  }

  return (
    <div className='navbar'>
        <nav>
            <div className="nav-contents">
              <Link to="/" className='logo'>Quran Scholar</Link>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li>
                    <a href="#courses">Courses</a>
                  </li>
                  <li><a href="#team">Our Team</a></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/about">About</Link></li>
              </ul>
              {/* <Link to="/admission" className='admission'>Admission</Link> */}
              <a className='admission' href="https://surveyheart.com/form/62e6d76024ff9216a53b014f" target='_blank'>Admission</a>
            </div>
            <div className="mobile-nav">
              <Link to='/'>Quran Scholar</Link>
              <Menu onClick={handleSidenavOpen}></Menu>
            </div>
        </nav>
    </div>
  )
}

export default Navbar