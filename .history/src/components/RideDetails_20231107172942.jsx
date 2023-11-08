import React from 'react'
import driverImg from '../assets/images/driver-male-3x.png'
import { BsFillTelephoneFill } from 'react-icons/bs'

const RideDetails = () => {
  return (
    <div className=' bg-white absolute z-20 rounded-2xl p-2 shadow-lg flex flex-col md:m-2 h-max justify-center items-center w-full md:w-96'>
        <h1 className=' m-3 text-xl font-semibold text-pr-violet'> Ride Details </h1>

        {/* driver profile */}

        <div className=' driver-profile w-full flex justify-between'>
            <div className='driver-profile-1 w-fit flex gap-2 justify-start items-center'>
                <img src={driverImg} alt="driver-image" />
                <div className=' driver-profile-text flex flex-col'>
                    <div className=' driver-name text-lg'>Pankaj Kumar</div>
                    <div className=' ride-status text-gray-600 text-xs'>Trip has finished</div>
                </div>
            </div>
                <div className=' driver-profile-2 w-fit flex flex-col gap-1 justify-center items-center'>
                    <button className='pl-4 text-lg pr-4 pt-2 pb-2 border-spacing-1 border rounded-full border-pr-blue text-pr-blue'>
                        <BsFillTelephoneFill />
                    </button>
                </div>
        </div>
    </div>
  )
}

export default RideDetails