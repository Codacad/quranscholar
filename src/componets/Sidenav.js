import React from 'react'
import { Link } from 'react-router-dom'
import Close from '../icons/close.svg'

const Sidenav = () => {

    const handleSidenavToggle = () => {
        document.querySelector('.sidenav-wrapper').classList.add('sidenav-wrapper-toggle')
        document.querySelector('.sidenav').classList.add('sidenav-toggle')
    }

  return (
    <div className='sidenav-wrapper'>
        <div className="sidenav">
            <div className="sidenav-header">
                <h1><Link to="/" className='logo'>Quran Scholar</Link></h1>
                <button onClick={() => handleSidenavToggle()}><img src={Close} alt="" /></button>
            </div>
            <div className="contents">
                <Link to="/admission" className='admission'>Admission</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                    <Link to="/courses">Courses</Link>
                    </li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidenav