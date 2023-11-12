import React from 'react'
import piggyLogo from '../assets/images/piggy-logo.svg'
import { motion } from 'framer-motion'

const Topbar = () => {
  return (
    <div className=' fixed flex md:right-0 md:hidden h-fit w-screen p-2 z-20 bg-white rounded-b-lg '>
        <img src={piggyLogo} className=' p-2 right-0' alt="PiggyRide" />
        
        {isMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="w-fit  gap-2 shadow-xl rounded-lg flex flex-col absolute px-4 py-2 bg-cust-black right-2 top-16"
                >
                {signedInUser && (
                  <Link to={`/profile`}>
                    <p
                      onClick={() => setIsMenu(false)}
                      className=" px-2 py-2 flex items-center gap-2 cursor-pointer hover:bg-cust-khaki hover:text-headingColor bg-cust-black duration-100 ease-in-out text-textColor "
                    >
                      <FiUser />
                      My Profile
                    </p>
                  </Link>
                )}
                  {isAdmin && (
                    <Link to={"./users"}>
                      <p
                        onClick={() => setIsMenu(false)}
                        className=" px-2 py-2 flex items-center gap-2 cursor-pointer hover:bg-cust-khaki hover:text-headingColor bg-cust-black transition-all duration-100 ease-in-out text-textColor "
                      >
                        <HiUsers />
                        Users{" "}
                      </p>
                    </Link>
                  )}

                  {signedInUser && (
                    <Link to={"./forgot"}>
                      <p
                        onClick={() => setIsMenu(false)}
                        className=" px-2 py-2 flex items-center gap-2 cursor-pointer hover:bg-cust-khaki hover:text-headingColor bg-cust-black duration-100 ease-in-out text-textColor "
                      >
                        <MdPassword />
                        Change Password{" "}
                      </p>
                    </Link>
                  )}
                  {signedInUser && (
                    <p
                      className="px-2 py-2 flex items-center gap-2 cursor-pointer hover:bg-cust-khaki hover:text-headingColor transition-all duration-100 ease-in-out text-textColor bg-cust-red shadow-md"
                      onClick={logOut}
                    >
                      <MdLogout />
                      Log out{" "}
                    </p>
                  )}
                </motion.div>
              )}
    </div>
  )
}

export default Topbar