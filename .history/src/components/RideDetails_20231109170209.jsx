import React, { useState, Fragment } from "react";
import driverImg from "../assets/images/driver-50.png";
import vehicleIcon from "../assets/images/vehicle.svg";
import kidIcon from "../assets/images/kidart.svg";
import { Transition, Dialog } from "@headlessui/react";
import { BsFillTelephoneFill } from "react-icons/bs";

const RideDetails = () => {
  const [videoIsON, setVideoIsON] = useState(false);
  const [isRiderDetails, setIsRiderDetails] = useState(false);
  const [isDriverDetails, setIsDriverDetails] = useState(false);
  const controlVideo = () => {
    setVideoIsON(!videoIsON);
  };
  return (
    <div className=" bg-white scroll-smooth -mt-5 md:top-0 top-3/4 absolute z-20 rounded-2xl p-2 flex flex-col md:m-2 h-max justify-center items-center w-full md:w-96">
      <h1 className=" mt-3 text-2xl font-bold text-pr-violet">
        {" "}
        Ride Details{" "}
      </h1>
      <p className=" text-gray-600 "> Trip has finished.</p>
      <p className=" text-gray-600 text-sm mb-3">Dropped at 07 Nov, 01:00 PM</p>

      {/* driver profile */}

      <div className=" driver-profile m-1 p-1 w-full flex justify-between">
        <div
          onClick={() => setIsDriverDetails(true)}
          className="driver-profile-1 cursor-pointer w-fit flex gap-2 justify-start items-center"
        >
          <img
            src={driverImg}
            height={50}
            width={50}
            alt=" driver-image"
            className=" p-3 bg-pr-lightblue overflow-visible rounded-full"
          />
          <div className=" driver-profile-text flex flex-col">
            <div className=" driver-name text-lg">Pankaj Kumar</div>
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
            <div className=" vehicle-number text-lg">HR57A0461</div>
            <div className=" vehicle-model text-gray-600 text-xs">
              Maruthi - Ertiga 7 seater - Gurgoan
            </div>
          </div>
        </div>
      </div>

      {/* Rider Details  */}

      <div
        onClick={() => setIsRiderDetails(!isRiderDetails)}
        className=" cursor-pointer rider-profile m-1 p-1 w-full flex justify-between"
      >
        <div className="rider-profile-1 w-fit flex gap-2 justify-start items-center">
          <img height={50} width={50} src={kidIcon} alt="vehicle-image" />
          <div className=" rider-profile-text flex flex-col">
            <div className=" rider-name text-lg">Reyaansh</div>
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
                <Dialog.Panel className="w-fit transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <section className="bg-gray-800 text-gray-100">
                    <div className="container max-w-5xl px-4 py-12 mx-auto">
                      <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                          <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-400">
                            <h3 className="text-3xl font-semibold">
                              Morbi tempor
                            </h3>
                            <span className="text-sm font-bold tracki uppercase text-gray-400">
                              Vestibulum diam nunc
                            </span>
                          </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                          <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                              <h3 className="text-xl font-semibold tracki">
                                Donec porta enim vel{" "}
                              </h3>
                              <time className="text-xs tracki uppercase text-gray-400">
                                Dec 2020
                              </time>
                              <p className="mt-3">
                                Pellentesque feugiat ante at nisl efficitur, in
                                mollis orci scelerisque. Interdum et malesuada
                                fames ac ante ipsum primis in faucibus.
                              </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                              <h3 className="text-xl font-semibold tracki">
                                Aliquam sit amet nunc ut
                              </h3>
                              <time className="text-xs tracki uppercase text-gray-400">
                                Jul 2019
                              </time>
                              <p className="mt-3">
                                Morbi vulputate aliquam libero non dictum.
                                Aliquam sit amet nunc ut diam aliquet tincidunt
                                nec nec dui. Donec mollis turpis eget egestas
                                sodales.
                              </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
                              <h3 className="text-xl font-semibold tracki">
                                Pellentesque habitant morbi
                              </h3>
                              <time className="text-xs tracki uppercase text-gray-400">
                                Jan 2016
                              </time>
                              <p className="mt-3">
                                Suspendisse tincidunt, arcu nec faucibus
                                efficitur, justo velit consectetur nisl, sit
                                amet condimentum lacus orci nec purus. Mauris
                                quis quam suscipit, vehicula felis id, vehicula
                                enim.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                <Dialog.Panel className="w-fit transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <h2 className=" text-lg text-pr-violet mb-3 font-semibold">
                    Driver Details
                  </h2>
                  <div className="driver-detaisl-1 w-fit flex flex-col gap-2 justify-center items-center">
                    <img
                      height={60}
                      width={60}
                      src={driverImg}
                      alt="Pankaj Kumar"
                    />
                    <div className=" driver-name font-bold text-2xl">
                      Pankaj Kumar
                    </div>
                    <div className=" w-full flex justify-between items-center">
                      <p className=" uppercase">Exp: </p>
                      <span className=" text-pr-violet-2 font-bold text-xl">
                        {" "}
                        8+ Years
                      </span>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                      <p className=" uppercase ">Rides: </p>
                      <span className=" text-pr-violet-2 font-bold text-xl">
                        {" "}
                        643+
                      </span>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                      <p className=" uppercase">From: </p>
                      <span className=" text-pr-violet-2 font-bold text-xl">
                        {" "}
                        Sirsa
                      </span>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                      <p className=" uppercase">knows: </p>
                      <span className=" text-pr-violet-2 text-right font-bold text-xl">
                        {" "}
                        Hindi, English{" "}
                      </span>
                    </div>
                    <button
                      className="pl-5 text-lg pr-5 pt-1 hover:bg-pr-lightblue hover:text-pr-violet-2 text-white font-bold mt-3 pb-1 bg-pr-violet-2 border-spacing-1 rounded-full "
                      onClick={() => setIsDriverDetails(false)}
                    >
                      OK
                    </button>
                  </div>
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
