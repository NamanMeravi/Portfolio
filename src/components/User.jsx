import React from 'react'
import { adress } from '../constant/contact'
import { motion } from 'framer-motion'

const User = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1 whileInView={{y:-2,opacity:1}} transition={{duration:1}} initial={{y:10}} className="my-20 text-center text-4xl">Contact me</motion.h1>
      <div className='text-center tracking-tight '>
       <motion.p whileInView={{y:2,opacity:1}} initial={{y:-1,opacity:0}}transition={{duration:1.5}} className='my-4 font-sans'>{adress.email}</motion.p>
       <motion.p whileInView={{y:2,opacity:1}} initial={{y:-1,opacity:0}}transition={{duration:1.5}} className='my-4 font-sans'>{adress.phone_no}</motion.p>

      </div>
      
      </div>
  )
}

export default User
