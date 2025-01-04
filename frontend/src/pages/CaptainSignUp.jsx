import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignUp = () => {

   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault()
  
      setUserData({
        fullName: {
          firstName: firstName,
          lastName: lastName
        },
        password: password,
        email: email
      })
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
  
    }

  return (
    <div className='py-5 px-5 h-screen flex flex-col justify-between'>
        <div>
        <img className='w-20 mb-3' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's name </h3>
            <div className='flex gap-4 mb-5'>
              <input
                className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                required type="text" placeholder='First name'
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
              <input
                className='bg-[#eeeeee]  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                required type="text" placeholder='Last name'
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>What's our Captain's email </h3>
            <input
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required type="email" placeholder='email@example.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base'
              required type="password" placeholder='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

            <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-base'>Login</button>
          </form>

          <p className='text-center'> Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link>
          </p>
        </div>

        <div>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
  )
}

export default CaptainSignUp