import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Farman from '../images/team/farmanfarooqui.jpg'
import Tahir from '../images/team/tahirraza.jpg'
import Mustafa from '../images/team/mustafaraza.jpg'
import { Face, Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import photo1 from '../images/photos/photo1.avif'
import photo2 from '../images/photos/photo1.avif'
import photo3 from '../images/photos/photo2.avif'

const Team = () => {
  return (
    <div className='team'>
        <div className="meat-out-team">
            <h1>Meet Out Team</h1>
            <div className="contents">
                <p>Our team is the foundation of our successful institute. We work together for education. We value education in consideration with the success in hereafter and in the world as well.</p>
                <br />
                <p>Our team is built with <strong>integrity</strong>, <strong>morality</strong>, and <strong>collaboration</strong> with each other. We mainly focus on teaching <strong>Qur'an</strong> and <strong>Islamic Studies.</strong></p>
                <br /><p>In our team, we have brothers to teach brothers and sisters to teach sisters. Teachers are well educated, certified by the recognized institutes. Please join with our team right today and gain the knowledge of <strong>Quran</strong>, <strong>Hadith</strong>, <strong>Islam</strong>, and more.</p>
            </div>
        </div>
        <div className="team-contents">
            <div className="card farman">
                <header>
                    <img src={photo1} alt="" />
                </header>
                <div className="body">
                    <h2>Farman Farooqi</h2>
                    <h3>Manager</h3>
                    <h4>Hafiz, Aalim and Graduate</h4>
                </div>
                <div className="team-footer">
                    <Facebook></Facebook>
                    <Twitter></Twitter>
                    <Instagram></Instagram>
                </div>
            </div>
            <div className="card tahir">
                <header>
                    <img src={photo3} alt="" />
                </header>
                <div className="body">
                    <h2>Tahir Raza</h2>
                    <h3>Teacher</h3>
                    <h4>Hafiz, Aalim, and Master in Islamic Studies</h4>
                </div>
                <div className="team-footer">
                    <Facebook></Facebook>
                    <Twitter></Twitter>
                    <Instagram></Instagram>
                </div>
            </div>
            <div className="card afsar">
                <header>
                    <img src={photo2} alt="" />
                </header>
                <div className="body">
                    <h2>Shaykh Afsar Alimi</h2>
                    <h3>Teacher</h3>
                    <h4>Aalim and Master in Islamic Studies</h4>
                </div>
                <div className="team-footer">
                    <Facebook></Facebook>
                    <Twitter></Twitter>
                    <Instagram></Instagram>
                </div>
            </div>
            <div className="card mustafa">
                <header>
                    <img src={photo2} alt="" />
                </header>
                <div className="body">
                    <h2>Mustafa Raza</h2>
                    <h3>Teacher</h3>
                    <h4>Aalim and Graduate</h4>
                </div>
                <div className="team-footer">
                    <Facebook></Facebook>
                    <Twitter></Twitter>
                    <Instagram></Instagram>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team
