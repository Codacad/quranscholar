import React from 'react'

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
    </div>
  )
}

export default Enroll