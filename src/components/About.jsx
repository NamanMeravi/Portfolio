import React from "react";
import dp from "../assets/Dp.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1 whileInView={{x:1,y:-2, opacity:1}} initial={{y:100, opacity:0}} transition={{duration:1}} className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      

      

      <div className=" w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center ">
          
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p whileInView={{x:1,y:1, opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:3}} className=" font-serif my-2 min-w-96 py-6 mx-96 ">
                As a passionate and dedicated Full-Stack Developer, I specialize
                in creating seamless and dynamic web applications. With
                expertise in both front-end and back-end technologies, I strive
                to deliver user-centric solutions that drive business growth. My
                toolkit includes modern frameworks and languages such as React,
                Node.js, and Python, ensuring robust and scalable development. I
                am committed to continuous learning and staying abreast of
                industry trends to bring innovative ideas to life.
              </motion.p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
