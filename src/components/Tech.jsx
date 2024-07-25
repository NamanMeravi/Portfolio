import React from "react";
import { SiReact } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { animate, motion } from "framer-motion";
const Iconvariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      easy: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: -2 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={Iconvariant(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2 "
        >
          <SiReact className="text-7xl text-sky-600" />
        </motion.div>
        <motion.div
          variants={Iconvariant(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2 "
        >
          <IoLogoNodejs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={Iconvariant(9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2 "
        >
          <SiMongodb className="text-7xl text-green-900" />
        </motion.div>
        <motion.div
          variants={Iconvariant(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2 "
        >
          <SiExpress className="text-7xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={Iconvariant(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-neutral-800 p-2 "
        >
          <RiJavascriptFill className="text-7xl text-yellow-300" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
