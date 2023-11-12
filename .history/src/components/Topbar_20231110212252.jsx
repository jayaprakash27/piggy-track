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
                  className=" cursor-pointer ml-3 flex items-centre shadow-lg p-3 text-lg hover:bg-pr-violet-2 text-pr-violet-2 hover:text-white rounded-full"
                >
                  { isMenu ?  <RxCross1 />  : <FiMenu />}
                </motion.p>
        {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-fit gap-2 bg-white shadow-xl rounded-lg flex flex-col absolute px-4 py-2 bg-cust-black top-12 right-2"
                >
                    <p
                      className="px-2 py-2 flex items-center gap-2 cursor-pointer transition-all duration-100 ease-in-out shadow-md"
                    >
                      Contact
                    </p>
                </motion.div>
              )}
    </div>
  )
}

export default Topbar