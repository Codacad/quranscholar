import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleDropDown = () => {
    // e.preventDefault()
    document.querySelector('.dropdown').classList.toggle('toggle')
  }

 useEffect(() => {
    window.addEventListener('click', (e) => {
      console.log(e.target)
      if(e.target.classList.contains('toggle')){
        console.log('hello')
      }
    })
 }, [])
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='logo'>Quran Scholar</Link>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                  <Link to="#course" onClick={() => {handleDropDown()}}>Courses</Link>
                  <ul className='dropdown'>
                    <li><Link to="#quran">Tajweed ul Qur'an</Link></li>
                    <li><Link to="#hadith">Hadith</Link></li>
                    <li><Link to="#fiqh">Fiqh ul Hanafi</Link></li>
                    <li><Link to="#seerah">Seerah</Link></li>
                    <li><Link to="#english">English</Link></li>
                    <li><Link to="#arabi">Arabic</Link></li>
                    <li><Link to="#urdu">Urdu</Link></li>
                  </ul>
                </li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <Link to="/admission" className='admission'>Admission</Link>
        </nav>
    </div>
  )
}

export default Navbar