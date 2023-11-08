import React from 'react'
import driverImg from '../assets/images/driver-male-3x.png'

const RideDetails = () => {
  return (
    <div className=' bg-white absolute z-20 rounded-2xl p-2 shadow-lg flex flex-col md:m-2 h-max justify-center items-center w-full md:w-3/12'>
        <h1 className=' m-3 text-xl font-semibold text-pr-violet'> Ride Details </h1>

        {/* driver profile */}

        <div className=' driver-profile w-full flex justify-between'>
            <div className='driver-profile-1 w-fit flex gap-2 justify-start items-center'>
                <img src={driverImg} alt="driver-image" />
                <div className=' driver-profile-text flex flex-col'>
                    <div className=' driver-name text-lg'>Pankaj Kumar</div>
                    <div className=' ride-status text-gray-600 text-xs'>Trip has finished</div>
                </div>
                <div className=' driver-profile-2 w-fit flex gap-2 justify-end items-center'>
                    <div className=' drop-status text-xs'>
                    Dropped at 07 Nov, 01:00 PM
                    </div>
                    <button>
                        Call
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RideDetails