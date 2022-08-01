import React from 'react'
import Courses from '../componets/Courses'
import Enroll from '../componets/Enroll'
import Slider from '../componets/Slides'
import Team from '../componets/Team'
import Testimonials from '../componets/Testimonials'
import Sidenav from  '../componets/Sidenav'

const Main = () => {
  return (
    <div className='main'>
        <Slider />
        <Testimonials />
        <Enroll />
        <Courses />
        <Team />
        <Sidenav />
    </div>
  )
}

export default Main