import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='logo'>AL-Furqan Academy</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to="/about">Abour Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar