import React from 'react'
import Courses from '../componets/Courses'
import Enroll from '../componets/Enroll'
import Slider from '../componets/Slides'
import Testimonials from '../componets/Testimonials'

const Main = () => {
  return (
    <div className='main'>
        <Slider />
        <Testimonials />
        <Enroll />
        <Courses />
    </div>
  )
}

export default Main