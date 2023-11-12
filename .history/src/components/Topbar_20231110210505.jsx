import React, { useState } from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'
import { motion } from 'framer-motion'

const Topbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className=' fixed flex md:right-0 md:hidden h-fit w-screen p-2 z-20 bg-white rounded-b-lg '>
        <img src={piggyLogo} className=' p-2 right-0' alt="PiggyRide" />
        
        {!isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-fit  gap-2 shadow-xl rounded-lg flex flex-col absolute px-4 py-2 bg-cust-black right-2 top-16"
                >
                    <p
                      className="px-2 py-2 flex items-center gap-2 cursor-pointer transition-all duration-100 ease-in-out shadow-md"
                    >
                    </p>
                </motion.div>
              )}
    </div>
  )
}

export default Topbar