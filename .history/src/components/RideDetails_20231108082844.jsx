import React from 'react'
import driverImg from '../assets/images/driver-50.png'
import vehicleIcon from '../assets/images/vehicle.svg'
import kidIcon from '../assets/images/kidart.svg'
import { BsFillTelephoneFill } from 'react-icons/bs'

const RideDetails = () => {
  return (
    <div className='  bg-white absolute bottom-0 md:top-0 z-20 rounded-2xl p-2 shadow-lg flex flex-col md:m-2 h-max justify-center items-center w-full md:w-96'>
        <h1 className=' m-3 text-2xl font-bold text-pr-violet'> Ride Details </h1>

        {/* driver profile */}

        <div className=' driver-profile m-1 w-full flex justify-between'>
            <div className='driver-profile-1 w-fit flex gap-2 justify-start items-center'>
                <img src={driverImg} height={50} width={50} alt=" driver-image" className=' p-3 bg-pr-lightblue overflow-visible rounded-full' />
                <div className=' driver-profile-text flex flex-col'>
                    <div className=' driver-name text-lg'>Pankaj Kumar</div>
                    <div className=' ride-status text-gray-600 text-xs'>Trip has finished</div>
                </div>
            </div>
                <div className=' driver-profile-2 w-fit flex flex-col gap-1 justify-center items-center'>
                    <a href='#' className='pl-5 mr-2 text-lg pr-5 pt-2 group pb-2 hover:bg-pr-blue border-spacing-1 border rounded-full border-pr-violet-2 hover:border-none'>
                        <BsFillTelephoneFill className=' text-pr-violet-2 group-hover:text-white' />
                    </a>
                </div>
        </div>

        {/* Vehicle Details */}
        
        <div className=' vehicle-details m-1 w-full flex justify-between'>
            <div className='vehicle-details-1 w-fit flex gap-2 justify-start items-center'>
                <img height={50} width={50} src={vehicleIcon} alt="vehicle-image" />
                <div className=' vehicle-details-text flex flex-col'>
                    <div className=' vehicle-number text-lg'>HR57A0461</div>
                    <div className=' vehicle-model text-gray-600 text-xs'>Maruthi - Ertiga 7 seater - Gurgoan</div>
                </div>
            </div>
        </div>

        {/* Rider Details  */}
        
        <div className=' rider-profile m-1 w-full hover:bg-slate-100 rounded-md flex justify-between'>
            <div className='rider-profile-1 w-fit flex gap-2 justify-start items-center'>
                <img height={50} width={50} src={kidIcon} alt="vehicle-image" />
                <div className=' rider-profile-text flex flex-col'>
                    <div className=' rider-name text-lg'>Reyaansh</div>
                    {/* <div className=' ride-status text-gray-600 text-xs'></div> */}
                </div>
            </div>
        </div>
        
        {/* Live Video Feed */}
        
        <div className=' video-viewer m-1 w-full flex justify-between'>
            <h2>Video Feed</h2>
            <div className='video-viewer-1 w-fit flex gap-2 justify-start items-center'>
                <img height={50} width={50} src={kidIcon} alt="vehicle-image" />
                <div className=' video-viewer-buttons flex flex-col'>
                    <div className=' river-name text-lg'>Reyaansh</div>
                    {/* <div className=' ride-status text-gray-600 text-xs'></div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RideDetails