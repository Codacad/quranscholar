import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Farman from '../images/team/Farman.png'
import Tahir from '../images/team/Tahir.jpeg'
import Mustafa from '../images/team/Mustafa.jpeg'
import Afsar from '../images/team/Afsar.jpeg'
import Nabil from '../images/team/Anis.jpg'
import Rayyan from '../images/team/rayyan.jpg'
import Avatar from '../images/team/avatar.svg'
import { Face, Facebook, Telegram } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Twitter } from '@mui/icons-material'
import photo1 from '../images/photos/photo1.avif'
import photo2 from '../images/photos/photo1.avif'
import photo3 from '../images/photos/photo2.avif'

const Team = () => {
  return (
    <div className='team' id='team'>
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
                    <img src={Farman} alt="" />
                </header>
                <div className="body">
                    <h2>Farman Farooqui</h2>
                    <h3>Manager</h3>
                    <h4>Hafiz, Aalim and Graduate</h4>
                </div>
                <div className="team-footer">
                    <a href="https://www.facebook.com/profile.php?id=100012843811802" target="_blank" title="Facebook"><Facebook></Facebook></a>
                    <a href="https://twitter.com/FarmanFarooqui4" target="_blank" title="Twitter"><Twitter></Twitter></a>
                    <a href="https://www.instagram.com/farmanfarooqui4/" target="_blank" title="Instagram"><Instagram></Instagram></a>
                </div>
            </div>
            <div className="card tahir">
                <header>
                    <img src={Tahir} alt="" />
                </header>
                <div className="body">
                    <h2>Tahir Habib</h2>
                    <h3>Teacher</h3>
                    <h4>Hafiz, Aalim, and Master in Islamic Studies</h4>
                </div>
                <div className="team-footer">
                    <a href="https://instagram.com/tahirhabib35" target="_blank" title="Instagram"><Instagram></Instagram></a>
                </div>
            </div>
            <div className="card afsar">
                <header>
                    <img src={Afsar} alt="" />
                </header>
                <div className="body">
                    <h2>Shaykh Afsar Alimi</h2>
                    <h3>Teacher</h3>
                    <h4>Aalim and Master in Islamic Studies</h4>
                </div>
                <div className="team-footer">
                    <a title="Facebook" href="https://www.facebook.com/ghulamrasool.khan.319" target="_blank"><Facebook></Facebook></a>
                    <a title="Twitter" href="https://twitter.com/AfsarAlimi" target="_blank"><Twitter></Twitter></a>
                    <a title="Instagram" href="http://instagram.com/afsar.official_07" target="_blank"><Instagram></Instagram></a>
                </div>
            </div>
            <div className="card mustafa">
                <header>
                    <img src={Mustafa} alt="" />
                </header>
                <div className="body">
                    <h2>Mustafa Raza</h2>
                    <h3>Teacher</h3>
                    <h4>Aalim and Graduate</h4>
                </div>
                <div className="team-footer">
                    <a title='Instagram' href="http://instagram.com/Mustafaraza1445" target="_blank"><Instagram></Instagram></a>
                </div>
            </div>
            <div className="card anis">
                <header>
                    <img src={Nabil} alt="" />
                </header>
                <div className="body">
                    <h2>Anees Nabeel Azhari</h2>
                    <h3>Teacher</h3>
                    <h4>Master in Islamic Theology - Al Azhar University, Cairo, Egypt.</h4>
                </div>
                <div className="team-footer">
                    <a href="https://t.me/aneesnabeel786" title="Telegram" target="_blank"><Telegram></Telegram></a>
                </div>
            </div>
            <div className="card rayyan">
                <header>
                    <img src={Rayyan} alt="" />
                </header>
                <div className="body">
                    <h2>Rayyan Raza</h2>
                    <h3>Teacher</h3>
                    <h4>Aalim and Graduate</h4>
                </div>
                <div className="team-footer">
                    <a href="http://instagram.com/rayyanraza26" target="_blank" title="Instagram"><Instagram></Instagram></a>
                </div>
            </div>
            <div className="card noori">
                <header>
                    <img src={Avatar} alt="" />
                </header>
                <div className="body">
                    <h2>Umme Ruman Noori</h2>
                    <h3>Teacher</h3>
                    <h4>Fazila</h4>
                </div>
                {/* <div className="team-footer">
                    <a href=""><Facebook></Facebook></a>
                    <a href=""><Twitter></Twitter></a>
                    <a href=""><Instagram></Instagram></a>
                </div> */}
            </div>
            <div className="card bushra">
                <header>
                    <img src={Avatar} alt="" />
                </header>
                <div className="body">
                    <h2>Bushra Fatima</h2>
                    <h3>Teacher</h3>
                    <h4>Fazila</h4>
                </div>
                {/* <div className="team-footer">
                    <a href=""><Facebook></Facebook></a>
                    <a href=""><Twitter></Twitter></a>
                    <a href=""><Instagram></Instagram></a>
                </div> */}
            </div>
            <div className="card muddassira">
                <header>
                    <img src={Avatar} alt="" />
                </header>
                <div className="body">
                    <h2>Mudassria Habib</h2>
                    <h3>Teacher</h3>
                    <h4>Fazila</h4>
                </div>
                {/* <div className="team-footer">
                    <a href=""><Facebook></Facebook></a>
                    <a href=""><Twitter></Twitter></a>
                    <a href=""><Instagram></Instagram></a>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Team
