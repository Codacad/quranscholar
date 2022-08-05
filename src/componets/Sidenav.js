import React from 'react'
import { Link } from 'react-router-dom'
import Close from '../icons/close.svg'

const Sidenav = () => {

    const handleSidenavClose = () => {
        document.querySelector('.sidenav-wrapper').classList.remove('sidenav-wrapper-toggle')
        document.querySelector('.sidenav').classList.remove('sidenav-toggle')
    }

  return (
    <div className='sidenav-wrapper'>
        <div className="sidenav">
            <div className="sidenav-header">
                <a href='https://surveyheart.com/form/62e6d76024ff9216a53b014f' target="_blank" className='admission'>Admission</a>
                <button onClick={() => handleSidenavClose()}><img src={Close} alt="" /></button>
            </div>
            <div className="contents">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                    <Link to="/courses">Courses</Link>
                    </li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidenav