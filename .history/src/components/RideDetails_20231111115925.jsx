import React, { useState, Fragment } from "react";
import piggyLogo from '../assets/images/piggy-logo.svg'
import driverImg from "../assets/images/driver-50.png";
import vehicleIcon from "../assets/images/vehicle.svg";
import kidIcon from "../assets/images/kidart.svg";
import { Transition, Dialog } from "@headlessui/react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Rating } from "@mui/material";

const RideDetails = ({ riders, driverInfo }) => {
  const [videoIsON, setVideoIsON] = useState(false);
  const [isRiderDetails, setIsRiderDetails] = useState(false);
  const [isDriverDetails, setIsDriverDetails] = useState(false);
  const controlVideo = () => {
    setVideoIsON(!videoIsON);
  };
  return (
    <div className=" bg-white scroll-smooth -mt-5 md:mt-16 md:top-0 top-3/4 absolute z-20 rounded-2xl p-2 flex flex-col h-max justify-center items-center w-full md:w-1/4">
      <div className=" w-full flex justify-start">
      </div>
      <h1 className=" mt-3 text-2xl font-bold text-pr-violet">
        {" "}
        Ride Details{" "}
      </h1>
      {/* <p className=" text-gray-600 "> Trip has finished.</p> */}
      <p className=" text-gray-600 text-sm mb-3">Dropped at 07 Nov, 01:00 PM</p>

      {/* driver profile */}

      <div className=" driver-profile m-1 p-1 w-full flex justify-between">
        <div
          onClick={() => setIsDriverDetails(true)}
          className="driver-profile-1 hover:text-pr-violet-2 cursor-pointer w-fit flex gap-2 justify-start items-center"
        >
          <img
            src={driverImg}
            height={50}
            width={50}
            alt=" driver-image"
            className=" p-3 bg-pr-lightblue overflow-visible rounded-full"
          />
          <div className=" driver-profile-text flex flex-col">
            <div className=" driver-name text-lg">{driverInfo.name}</div>
            <div className=" ride-status text-gray-600 text-xs">
              Tap for more details
            </div>
          </div>
        </div>
        <div className=" driver-profile-2 w-fit flex flex-col gap-1 justify-center items-center">
          <a
            href="tel:9802333334"
            className="pl-5 text-lg pr-5 pt-2 bg-pr-lightblue group pb-2 hover:bg-pr-violet-2 border-spacing-1 rounded-full "
          >
            <BsFillTelephoneFill className=" text-pr-violet-2 group-hover:text-white" />
          </a>
        </div>
      </div>

      {/* Vehicle Details */}

      <div className=" vehicle-details m-1 p-1 w-full flex justify-between">
        <div className="vehicle-details-1 w-fit flex gap-2 justify-start items-center">
          <img height={50} width={50} src={vehicleIcon} alt="vehicle-image" />
          <div className=" vehicle-details-text flex flex-col">
            <div className=" vehicle-number text-lg"> {driverInfo.carNum} </div>
            <div className=" vehicle-model text-gray-600 text-xs">
              {driverInfo.carName}
            </div>
          </div>
        </div>
      </div>

      {/* Rider Details  */}

      <div
        onClick={() => setIsRiderDetails(!isRiderDetails)}
        className=" cursor-pointer hover:text-pr-violet-2 rider-profile m-1 p-1 w-full flex justify-between"
      >
        <div className="rider-profile-1 w-fit flex gap-2 justify-start items-center">
          <img height={50} width={50} src={kidIcon} alt="vehicle-image" />
          <div className=" rider-profile-text flex flex-col">
            
            <div className=" rider-name text-lg"> {riders[0].name}+{riders.length -1 } others </div>
            <div className=" ride-status text-gray-600 text-xs">
              Tap for more details
            </div>
          </div>
        </div>
      </div>

      {/* Live Video Feed */}

      <div className=" video-viewer m-1 p-1 w-full flex flex-col items-center justify-between">
        <h2 className=" text-lg text-pr-violet mb-3 font-semibold">
          Video Feed
        </h2>
        <div className="video-viewer-1 h-60 z-20 relative w-full bg-black rounded-md flex gap-2 justify-center items-center">
          {videoIsON ? (
            <video
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              controls={false}
              autoPlay
            ></video>
          ) : (
            <button
              onClick={() => controlVideo()}
              className=" pl-5 z-30 pr-5 pt-2 pb-2 bg-white hover:bg-pr-blue border-spacing-1 border text-black border-collapse hover:border-pr-blue hover:text-white rounded-full border-white"
            >
              Show Video
            </button>
          )}
        </div>
      </div>

      <Transition appear show={isRiderDetails} as={Fragment}>
        <Dialog
          as="div"
          className=" relative z-40"
          onClose={() => setIsRiderDetails(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-fit transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all">
                  <section className=" flex flex-col mt-3 items-center">
                    <div className="container flex flex-col flex-wrap md:flex-row justify-center items-center w-fit mx-auto">
                      { riders.map((rider) => (
                        <div className="grid gap-2 mx-8 my-3 max-w-sm">
                        <div className="col-span-12 sm:col-span-3">
                          <div className="text-center sm:text-left">
                            <h3 className="text-xl font-semibold"> {rider.name} </h3>
                            <span className="text-sm font-bold uppercase text-gray-400">
                              { rider.gender }
                            </span>
                          </div>
                        </div>
                        <div className="relative px-2 col-span-12">
                          <div className=" space-y-2 relative px-4 col-span-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-pr-violet-2">
                              <h3 className="text-lg font-semibold tracki">
                                { rider.fromName }
                              </h3>
                              <p className="mt-1 text-sm">
                                {rider.fromAdd}
                              </p>
                            </div>
                            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-pr-violet">
                              <h3 className="text-lg font-semibold tracki">
                                {rider.toName}
                              </h3>
                              <p className="mt-1 text-sm">
                              {rider.toAdd}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      )) }
                    </div>
                      <button onClick={ () => setIsRiderDetails(false) }
            className=" border-pr-violet-2 border w-fit text-xl font-bold text-white outline-none focus:outline-none group m-3 hover:bg-pr-violet px-5 py-1 bg-pr-violet-2 border-spacing-1 rounded-full mt-3"
          > OK
          </button>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={isDriverDetails} as={Fragment}>
        <Dialog
          as="div"
          className=" relative z-40"
          onClose={() => setIsDriverDetails(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/10 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-fit transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <section className=" flex flex-col items-center">
                    <div className="container flex flex-col flex-wrap md:flex-row justify-between items-center max-w-5xl mx-auto">
                        <div className="grid gap-2 mx-8 my-3 max-w-sm">
                        <div className="col-span-12 sm:col-span-3">
                          <div className="text-center flex flex-col sm:text-left">
                            <h3 className="text-xl font-semibold"> {driverInfo.name} </h3>
                            <span className="text-sm font-bold uppercase text-gray-400">
                              { driverInfo.gender }
                            </span>
                            <span className="text-sm font-bold uppercase text-green-600">
                              <Rating readOnly precision={0.1} defaultValue={driverInfo.rating} />
                            </span>
                          </div>
                        </div>
                        <div className="relative px-2 col-span-12">
                          <div className=" space-y-2 relative px-4 col-span-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-pr-violet-2">
                              <h3 className="text-lg font-semibold tracki">
                                Experience
                              </h3>
                              <p className="mt-1 text-sm">
                                Exp: {driverInfo.exp}+ Years
                              </p>
                              <p className="mt-1 text-sm">
                                Rides: {driverInfo.rides}+
                              </p>
                            </div>
                            <div className="flex flex-col relative">
                              <h3 className="text-lg font-semibold tracki">
                                More Info
                              </h3>
                              <p className="mt-1 text-sm">
                              From: {driverInfo.from}
                              </p>
                              <p className="mt-1 text-sm">
                              Knows: {driverInfo.languages}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <button onClick={ () => setIsDriverDetails(false) }
            className=" border-pr-violet-2 border w-fit text-xl font-bold text-white outline-none focus:outline-none group m-3 hover:bg-pr-violet px-5 py-1 bg-pr-violet-2 border-spacing-1 rounded-full mt-3"
          > OK
          </button>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default RideDetails;
