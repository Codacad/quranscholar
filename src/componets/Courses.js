import React from 'react'
import quran from '../images/quran.jpg'
import fiqh from '../images/fiqh.avif'
import hadith from '../images/hadith.avif'
import seerah from '../images/seerah.avif'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='courses'>
        <h1><span className='our'>Our</span> Courses</h1>
        <div className="contents">
            <div className="course quran">
                <header>
                    <img src={quran} alt="" />
                    <h2>Tajweed ul Quran</h2>
                </header>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta?</p>
                    <Link to="/courses">Read More</Link>
                </div>
            </div>
            <div className="course fiqh">
                <header>
                    <img src={fiqh} alt="" />
                    <h2>Fiqh ul Hanafi</h2>
                </header>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta?</p>
                    <Link to="/courses">Read More</Link>
                </div>
            </div>
            <div className="course seerah">
                <header>
                    <img src={seerah} alt="" />
                    <h2>Seerah</h2>
                </header>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta?</p>
                    <Link to="/courses">Read More</Link>
                </div>
            </div>
            <div className="course hadith">
                <header>
                    <img src={hadith} alt="" />
                    <h2>Hadith</h2>
                </header>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta?</p>
                    <Link to="/courses">Read More</Link>
                </div>
            </div>
            <div className="course arabic">
                <header>
                    <img src={quran} alt="" />
                    <h2>Arabic</h2>
                </header>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta?</p>
                    <Link to="/courses">Read More</Link>
                </div>
            </div>
            <div className="course urdu">
                <header>
                    <img src={quran} alt="" />
                    <h2>Urdu</h2>
                </header>
                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, soluta?</p>
                    <Link to="/courses">Read More</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses