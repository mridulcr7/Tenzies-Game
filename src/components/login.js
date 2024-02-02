import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const navigate=useNavigate();
  function login()
  {
    navigate("/body")

  }
  return (
    <div className='login'>
      <div>
        <input type="text" placeholder='email' />
        <input type="text" placeholder='password' />
        <button onClick={login}>login</button>
        <p>dont have a account?register</p>

      </div>

    </div>
  )
}

export default Login