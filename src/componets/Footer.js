import { Link } from 'react-router-dom'
import React from 'react'
import { Facebook, Twitter, Instagram, YouTube, MyLocation, Email, Call } from '@mui/icons-material'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="header">
            <div className="header-content">
                <Link to="/"><h1><span className="our">Quran</span> Scholar</h1></Link>
            </div>
        </div>
        <div className="contents">
            <div className="quick-links">
                <h2>Quick Link</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>All Courses</Link></li>
                    <li><Link to='/'>Image Gallery</Link></li>
                    <li><Link to='/'>Addmission</Link></li>
                    <li><Link to='/'>Become A Teacher</Link></li>
                </ul>
            </div>
            <div className="address">
                <h2>Address</h2>
                <div className="address-content">
                    <div className="address">
                        <MyLocation></MyLocation>
                        <span>244601 Faridnagar, Thakurdwara, Moradabad, Uttar Pradesh, India.</span>
                    </div>
                    <div className="mail">
                        <Email></Email>
                        <Link to="#" mailto="contact@quranscholar.in"><span>contact@quranscholar.in</span></Link>
                    </div>
                    <div className="call">
                        <Call></Call>
                        <span>+918057121113, +917248780198</span>
                    </div>
                </div>
            </div>
            <div className="social-medias">
                <h2>Social Medias</h2>
                <div className="social-media-content">
                    <Link to="#">
                        <Facebook></Facebook>
                        <span>Facebook</span>
                    </Link>
                    <Link to="#">
                        <Twitter></Twitter>
                        <span>Twitter</span>
                    </Link>
                    <Link to="#">
                        <Instagram></Instagram>
                        <span>Instagram</span>
                    </Link>
                    <Link to="#">
                        <YouTube></YouTube>
                        <span>Youtube</span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer