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
              <Link to="/quranscholar" className='logo'>Quran Scholar</Link>
              <ul>
                  <li><Link to="/quranscholar">Home</Link></li>
                  <li>
                    <a href="#courses">Courses</a>
                  </li>
                  <li><a href="/quranscholar#team">Our Team</a></li>
                  <li><Link to="/quranscholar/gallery">Gallery</Link></li>
                  <li><Link to="/quranscholar/about">About</Link></li>
              </ul>
              {/* <Link to="/admission" className='admission'>Admission</Link> */}
              <a className='admission' href="https://surveyheart.com/form/62e6d76024ff9216a53b014f" target='_blank'>Admission</a>
            </div>
            <div className="mobile-nav">
              <Link to='/quranscholar'>Quran Scholar</Link>
              <Menu onClick={handleSidenavOpen}></Menu>
            </div>
        </nav>
    </div>
  )
}

export default Navbar