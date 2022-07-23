import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='logo'>Quran Scholar</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                  <Link to="/courses">Courses</Link>
                </li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            {/* <Link to="/admission" className='admission'>Admission</Link> */}
            <Button variant='contained' color='primary'>
              Admission
            </Button>
        </nav>
    </div>
  )
}

export default Navbar