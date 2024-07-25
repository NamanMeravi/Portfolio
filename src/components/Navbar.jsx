import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
  <>
  <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className=' m-8 text-4xl flex flex-shrink-0 items-center'>
        <motion.p whileInView={{x:1}} initial={{x:-100}} transition={{duration:1}} className=' mx-2 w-10' >Welcome</motion.p>
    </div>
    <motion.div initial={{y:10,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration:2}} className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <LuInstagram  className=' cursor-pointer' />
    <FaGithub className=' cursor-pointer'/>
    <FaLinkedin className=' cursor-pointer'/>
    </motion.div>

  </nav>
  </>
  )
}

export default Navbar
