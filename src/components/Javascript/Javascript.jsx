import React from 'react'
import "./Javascript.css"
import Destructuring from '../common/Sliders/Destructuring.jsx'

function Javascript() {
  return (
    <div>
      <div className="center_container">
        <h2 className='text-white fs-1 text-center my-4'>Javascript</h2>
        <div className="destructuring my-3">
        <h2 className='text-white my-3'>Destructuring</h2>
        <Destructuring/>
        </div>
      </div>
    </div>
  )
}

export default Javascript