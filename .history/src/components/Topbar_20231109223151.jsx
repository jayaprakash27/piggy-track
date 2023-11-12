import React from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'

const Topbar = () => {
  return (
    <div className=' fixed flex md:right-0 h-fit w-screen p-2 z-20 bg-white rounded-lg '>
        <img src={piggyLogo} className=' p-2 right-0' alt="PiggyRide" />
    </div>
  )
}

export default Topbar