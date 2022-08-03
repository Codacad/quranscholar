import React from 'react'
import quran from '../images/quran.jpg'
import fiqh from '../images/fiqh.avif'
import hadith from '../images/hadith.avif'
import seerah from '../images/seerah.avif'
import { Link } from 'react-router-dom'
import Sidenav from '../componets/Sidenav'

const Courses = () => {
  return (
    <div className='courses-page'>
        <Sidenav/>
        <h1><span className='our'>Our</span> Courses</h1>
        <div className="contents">
            <div className="course quran">
                <div className='image-side'>
                    <img src={quran} alt="" />
                </div>
                <div className="text-side">
                    <h2>Tajweed ul Quran</h2>
                    <p>The Qur'an is the source of all knowledge and the holiest book for Muslims.  It is important for every Muslim to read, learn, and practice it.  If you have come to our website to learn Qur'an then you have achieved your goal. The prophet Muhammad <strong>ﷺ</strong> said: "The best among you (Muslims) are those who learn the Qur'an and teach it.</p>
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
            <div className="course fiqh">
                <div className='image-side'>
                    <img src={fiqh} alt="" />
                </div>
                <div className="text-side">
                    <h2>Fiqh</h2>
                    <p>Fiqh is Islamic jurisprudence  Fiqh is the human understanding and practices of the Shariah that is human understanding of the divine Islamic law as revealed in the Qur'an and the Sunnah (the teachings and practices of the prophet Muhammad <strong>ﷺ</strong> and his companions).
                   <br /> <br /> We are obliged to act upon Sharia,  and fiqh gives us comprehensive knowledge about Shariah so we have to learn fiqh.
                   <br /> <br /> The Prophet Muhammad <strong>ﷺ</strong> said: “When Allah wishes good for anyone, He bestows upon him the Fiqh (comprehension) of the religion.”</p>
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
            <div className="course hadith">
                <div className='image-side'>
                    <img src={hadith} alt="" />
                </div>
                <div className="text-side">
                    <h2>Hadith</h2>
                    <p>Hadith have been called "the backbone" of Islamic civilization and within Islam the authority of hadith as a source for religious law and moral guidance ranks second. If you want to know the principles of Islam, you have to learn Hadith. The Prophet <strong>ﷺ</strong> said: “May Allah beautify a man who hears a saying (Hadith) of mine, so he memorises it and conveys it as he heard it.”</p>
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
            <div className="course seerah">
                <div className='image-side'>
                    <img src={seerah} alt="" />
                </div>
                <div className="text-side">
                    <h2>Seerah</h2>
                    <p>
                        Seerah means the study of the life of the Prophet Muhammed  <strong>ﷺ</strong> the Last and Final Prophet and the Messenger of Allah. It is the study of his life and all that is related to him.
                        <br />
                        Studying Seerah is a sign of love and it increases our love for the Proph­et Muhammad <strong>ﷺ</strong> . Studying seerah is the only way that can foster our weak love for the Prophet <strong>ﷺ</strong>. Loving him is enjoined upon us and it is one of the principles of Faith. We should love him more than our parents, children, all people, and even our own selves. Narrated Anas (May Allah be pleased with him) that the Prophet <strong>ﷺ</strong> said:
                        <br /><br />
                        <i>“None of you will have faith till he loves me more than his father, his children and all mankind.”</i> -- <strong>(Al-Bukhari 15).</strong>
                    </p>
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
            <div className="course arabic">
                <div className='image-side'>
                    <img src={quran} alt="" />
                </div>
                <div className="text-side">
                    <h2>Arabic</h2>
                    <p>Arabic was chosen by Allah, and our holy scriptures Qur'an and Hadith are written entirely in Arabic. Therefore, every Muslim must learn to read and speak Arabic, the language of the prophet, in order to be able to understand and interpret the word of Allah through prayer and reading the Quran. Because Arabic is considered the authentic language, Taking courses in Arabic means learning about Islam deeply In fact, the Prophet in fact, the Prophet ﷺ advised every Muslim to learn Arabic. According to a hadith reported from Umar ibn al-Khattab (رضی اللہ عنہ), he said:</p>
                    <p style={{textAlign:'right'}}>
                        
                        <strong>“تَعَلَّمُوا الْعَرَبِيَّةَ؛ فَإِنَّهَا تُثَبِّتُ الْعَقْلَ، وَتَزِيدُ فِي الْمُرُوءَةِ”</strong>
                        <br />
                        <i>“Learn Arabic for it strengthens the mind and enhances chivalry” [Al-Baihaqi, Shu’ab El-Eman ]</i>
                    </p>
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
            <div className="course urdu">
                <div className='image-side'>
                    <img src={quran} alt="" />
                </div>
                <div className="text-side">
                    <h2>Urdu</h2>
                    <p>Urdu is the most widely spoken language in the subcontinent.  Everyone is aware of its sweetness and softness and this language is developing rapidly all over the world. Urdu is probably one of the most sweetest language one could learn. There is a couplet in Urdu. "Woh Bole Toh Har Lafz se Khushbo Aaye"
                        "Aisi Boli Wahi Bole Jise Urdu Aaye".
                        
                        <br /><br />
                        If you live in the subcontinent and are an Islamic student, it becomes necessary for you to learn Urdu because the Islamic literature here is mostly in Urdu.
                        </p>
                    
                    <Link to="/apply">Apply</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses