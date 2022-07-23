import React from 'react'
import Courses from '../componets/Courses'
import Enroll from '../componets/Enroll'
import Slider from '../componets/Slides'
import Team from '../componets/Team'
import Testimonials from '../componets/Testimonials'

const Main = () => {
  return (
    <div className='main'>
        <Slider />
        <Testimonials />
        <Enroll />
        <Courses />
        <Team />
    </div>
  )
}

export default Main