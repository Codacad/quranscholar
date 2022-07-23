import React from 'react'
import { School, Done, Task, Elderly, Flag } from '@mui/icons-material'

const Enroll = () => {
  return (
    <div className='enroll'>
        <div className="contents">
            <div className="text-content">
                <h1>This is a better platform with limitted seats, hurry up.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti, magni unde esse tenetur alias distinctio numquam nulla et minus cum, consectetur, sit veniam ad doloribus. Vel illum eos saepe qui architecto, eligendi ipsa totam? Similique unde cumque fuga veritatis cupiditate obcaecati, itaque necessitatibus accusantium dolorem culpa debitis aliquid nam.</p>
            </div>
            <div className="form-content">
                <h1>Enroll Now</h1>
                <form action="">
                    <input type="text" name='name' id='name' placeholder='Name'/>
                    <input type="email" name='email' id='email' placeholder='Email'/>
                    <input type="phone" name='phoneNumber' id='phone-number' placeholder='Phone Number'/>
                    <select name="course" id="course">
                        <option value="quran">Tajweed ul Qur'an</option>
                        <option value="hadith">Hadith</option>
                        <option value="fiqh">Fiqh ul Hanafi</option>
                        <option value="seerah">Seerah</option>
                        <option value="english">English</option>
                        <option value="arabic">Arabic</option>
                        <option value="urdu">Urdu</option>
                    </select>
                    <button className='enroll-btn'>Enroll</button>
                </form>
            </div>
        </div>
        <div className="achievements">
            <div className="achieved">
                <h1>What we have achieved this year successfully!</h1>
            </div>
            <div className="achievement-contents">
                <div className="achievement admissions">
                    <School></School>
                    <h3 data-val="250">0</h3>
                    <span>Admissions this year</span>
                </div>
                <div className="achievement graduated">
                    <Task></Task>
                    <h3 data-val="220">0</h3>
                    <span>Students have learnt to read Qur'an successfully</span>
                </div>
                <div className="achievement elder">
                    <Elderly></Elderly>
                    <h3 data-val="29">0</h3>
                    <span>Students over the age of 60</span>
                </div>
                <div className="achievement foreigner">
                    <Flag></Flag>
                    <h3 data-val="89">0</h3>
                    <span>Students from another countries</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Enroll