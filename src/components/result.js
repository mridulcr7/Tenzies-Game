import React from 'react'

function Result(props) {
    console.log(props)
  return (
    <div className='result'>
        <h1>u played very well </h1>
        <h2>you took {props.time}</h2>
    </div>
  )
}

export default Result