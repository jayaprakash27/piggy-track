import React, { useState } from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'

const Topbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className=' fixed flex md:right-0 h-fit justify-between w-screen p-2 z-20 bg-white rounded-b-lg '>
        <img src={piggyLogo} className=' p-2 right-0' alt="PiggyRide" />
        <motion.p
                  whileHover={{ scale: 1.03 }}
                  onClick={() => setIsMenu(!isMenu)}
                  className=" cursor-pointer ml-3 flex justify-center p-3 items-centre shadow-lg h-fit text-lg hover:bg-pr-violet-2 text-pr-violet-2 hover:text-white rounded-full"
                >
                  { isMenu ?  <RxCross1 />  : <FiMenu />}
                </motion.p>
        {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-fit gap-3 bg-white shadow-xl rounded-lg flex flex-col absolute px-4 py-2 bg-cust-black top-16 right-2"
                >
                <h1 className=" text-2xl font-bold text-pr-violet">
                  {" "}
                  Contact Us{" "}
                </h1>
                  <a className=' hover:text-pr-violet-2' href="tel:6364636263">Call Us: 6364636263</a>
                  <a className=' hover:text-pr-violet-2' href="mailto:care@piggyride.in">Email: care@piggyride.in</a>
                </motion.div>
              )}
    </div>
  )
}

export default Topbar