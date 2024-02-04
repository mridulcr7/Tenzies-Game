import React from 'react'
import Header from './header'
import Tenzies from './tenzies'
import {useNavigate} from 'react-router-dom'

function Body() {
  const navigate=useNavigate();

  function play()
  {
    navigate("/tenzies")

  }
  return (
    <div>
      <Header />
    <div className='Home'>
      
      <div className='center-container'>
        <h1 className='title'>hello  samridhi!!!!!!!!!!!!</h1>
        <h3>lets play now</h3>
        <button onClick={play} className='play'>Play game</button>
      </div>
     

    </div>
    </div>
  )
}

export default Body