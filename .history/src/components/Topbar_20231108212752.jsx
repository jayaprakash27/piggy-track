import React from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'

const Topbar = () => {
  return (
    <div className=' w-full p-4 z-20 bg-white '>
        <img src={piggyLogo} alt="PiggyRide" />
    </div>
  )
}

export default Topbar