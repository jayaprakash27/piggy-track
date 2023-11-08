import React from 'react'
import driverImg from '../assets/images/driver-male-3x.png'

const RideDetails = () => {
  return (
    <div className=' bg-white absolute z-20 rounded-lg p-2 shadow flex flex-col md:m-2 h-max justify-center items-center w-full md:w-2/5'>
        <h1 className=' m-3 text-xl font-semibold text-pr-violet'> Ride Details </h1>
        <div className=' driver-profile w-full flex justify-between'>
            <div className=' w-fit flex justify-start items-center'>
                <img src={driverImg} alt="driver-image" />
                <div className=' driver-profile-text flex flex-col'>
                    <div className=' driver-name text-lg'>Pankaj Kumar</div>
                    <div className=' ride-status text-gray-600 text-xs'>Trip has finished</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RideDetails