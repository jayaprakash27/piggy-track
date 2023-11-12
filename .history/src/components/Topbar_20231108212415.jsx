import React from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'

const Topbar = () => {
  return (
    <div className=' w-full z-30 bg-white '>
        <img src={piggyLogo} alt="PiggyRide" />
    </div>
  )
}

export default Topbar