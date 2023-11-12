import React from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'

const Topbar = () => {
  return (
    <div className=' w-full fixed h-fit p-4 z-20 bg-trANSPARENT '>
        <img src={piggyLogo} className=' p-2 right-0' alt="PiggyRide" />
    </div>
  )
}

export default Topbar