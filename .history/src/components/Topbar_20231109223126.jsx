import React from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'

const Topbar = () => {
  return (
    <div className=' fixed flex md:right-0 h-fit w-screen z-20 bg-white '>
        <img src={piggyLogo} className=' p-2 right-0' alt="PiggyRide" />
    </div>
  )
}

export default Topbar