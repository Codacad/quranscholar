import React from 'react'

const Admission = () => {
  return (
    <div className="admission">
        <div className="admission-contents">
            <div className="content-side"></div>
            <div className="form-side">
                <form>
                    <div className="form-inputs">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' required autoFocus/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="guardianName">Guardian Name:</label>
                            <input type="text" name="guardianName" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactNumber">Contact Number (<span className='subtext'>Whats App Number preferred</span>):</label>
                            <input type="text" name='contactNumber' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="street">Street/Town/Village:</label>
                            <input type="text" name='street' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipcode">Zip Code:</label>
                            <input type="text" name='zipcode'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="text" name='city' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <input type="text" name='state' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country:</label>
                            <input type="text" name='country' required/>
                        </div>
                        <div className="form-group file">
                            <label htmlFor="id">ID (E.g. Aadhar Card, Passport, VoterID )</label>
                            <input type="file" name='id'/>
                        </div>
                        <div className="form-group agree">
                            <input type="checkbox" required/>
                            <label htmlFor="agree"> I hereby agree to and accept the following terms and conditions</label>
                            <ol>
                                <li>I will be in the class on time</li>
                                <li>I will respect all teachers</li>
                                <li>I will follow the rules and guidelines instructed in the class</li>
                            </ol>
                        </div>
                    </div>
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Admission
