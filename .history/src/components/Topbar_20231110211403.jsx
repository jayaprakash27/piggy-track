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
        <div onClick={ () => setIsMenu(!isMenu)} className=' p-2 rounded-full shadow-md'>
          { isMenu ? <RxCross1 /> : <FiMenu /> }
        </div>
        {!isMenu && (
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