import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className=' flex flex-col justify-center items-center space-y-2 '>
      <div className='spinner'/>
      <p className=' font-semibold text-bgDark '>Loading.... </p>
    </div>
  )
}

export default Spinner;
