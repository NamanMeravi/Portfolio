import React from "react";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { animate, motion, transform } from "framer-motion";
const head = (duration) => ({
  initial: { y: 10, opacity: 0 },
  animate: { y: 1, x: 1, opacity: 1, transition: { duration: duration } },
});
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <motion.h1
        whileInView={{ y: -2, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <motion.div
        variants={head(1.5)}
        initial="initial"
        transition="transition"
        whileInView="animate"
        className="font-serif"
      >
        <h2 className="font-bold text-4xl py-6">Flipkart clone :</h2>
        <p>
          <span className="text-2xl font-bold ">Overview</span>
          <br />
          <div className="py-3">
            I developed a fully functional Flipkart clone to demonstrate my
            proficiency in front-end development and my ability to recreate
            complex web applications. This project showcases my skills in HTML,
            TailwindCSS, JavaScript, and React.
            <br />
          </div>
          <span className="font-bold text-2xl">Technologies Used:</span>
        </p>
        <div className="flex py-4 ">
          <div className=" rounded-2xl gap-5 flex">
            <IoLogoHtml5 className="text-4xl" />
            <RiTailwindCssFill className="text-4xl" />
            <FaReact className="text-4xl" />
            <IoLogoJavascript className="text-4xl" />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={head(1.5)}
        initial="initial"
        transition="transition"
        whileInView="animate"
        className="font-serif"
      >
        <h2 className="font-bold text-4xl py-6">Chai-Fund :</h2>
        <p>
          <span className="text-2xl font-bold ">Overview</span>
          <br />
          <div className="py-3">
            I developed a comprehensive fundraiser website to showcase my skills
            in modern web development and secure user authentication. This
            project utilizes Next.js for server-side rendering and Auth.js for
            secure user authentication, creating a robust platform for
            fundraising activities.
            <br />
          </div>
          <span className="font-bold text-2xl">Technologies Used:</span>
        </p>
        <div className="flex py-4 ">
          <div className=" rounded-2xl gap-5 flex">
            <RiNextjsFill className="text-4xl" />
            <RiTailwindCssFill className="text-4xl" />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={head(1.5)}
        initial="initial"
        transition="transition"
        whileInView="animate"
        className="font-serif"
      >
        <h2 className="font-bold text-4xl py-6">Netflix :</h2>
        <p>
          <span className="text-2xl font-bold ">Overview</span>
          <br />
          <div className="py-3">
            I created a responsive Netflix clone to demonstrate my expertise in
            modern front-end development and responsive design. This project
            highlights my skills in using TailwindCSS to build a sleek and
            adaptive user interface that mimics the popular streaming platform.
            <br />
          </div>
          <span className="font-bold text-2xl">Technologies Used:</span>
        </p>
        <div className="flex py-4 ">
          <div className=" rounded-2xl gap-5 flex">
            <RiTailwindCssFill className="text-4xl" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
