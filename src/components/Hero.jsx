import React from "react";
import dp from "../assets/Dp.jpg";
import dps from "../assets/dps.jpg"
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mg-35"></div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col mx-8  lg:items-start">
            <motion.h1 initial={{x:-100,opacity:0}} whileInView={{x:1,opacity:1}} transition={{duration:2}} className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl ">
              Naman Meravi
            </motion.h1>
            <motion.span initial={{x:-100,opacity:0}} whileInView={{x:1,opacity:1}} transition={{duration:2}} className="bg-grading-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tightf ">
              Full Stack Developer
            </motion.span>
            <motion.p initial={{y:50,opacity:0}} whileInView={{y:1,opacity:1}} transition={{duration:4}} className="my-1 max-w-xl py-2 font-serif font-light tracking-tight">
              As a motivated and enthusiastic Full-Stack Developer, I bring a
              strong foundation in both front-end and back-end technologies,
              cultivated through academic projects and hands-on training.
              Proficient in JavaScript, HTML/CSS, React, Node.js, and various
              databases, I am eager to apply my skills in a professional
              setting. My passion for coding and problem-solving drives me to
              continuously learn and innovate. I am committed to delivering
              high-quality work and collaborating effectively within a team to
              contribute to successful project outcomes.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center rounded-full">
            <motion.img initial={{x:1000,opacity:0}} transition={{duration:4}} animate={{x:1,opacity:1, rotateX:360,rotateY:360,rotateZ:360}} src={dps} className="rounded-full border-collapse  bg-black" width={300} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
