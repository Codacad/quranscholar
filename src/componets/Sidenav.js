import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='sidenav-wrapper'>
        <div className="sidenav">
            <div className="contents">
                <Link to="/" className='logo'>Quran Scholar</Link>
                <Link to="/admission" className='admission'>Admission</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>
                    <Link to="#course">Courses</Link>
                    {/* <ul className='dropdown'>
                        <li><Link to="#quran">Tajweed ul Qur'an</Link></li>
                        <li><Link to="#hadith">Hadith</Link></li>
                        <li><Link to="#fiqh">Fiqh ul Hanafi</Link></li>
                        <li><Link to="#seerah">Seerah</Link></li>
                        <li><Link to="#english">English</Link></li>
                        <li><Link to="#arabi">Arabic</Link></li>
                        <li><Link to="#urdu">Urdu</Link></li>
                    </ul> */}
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