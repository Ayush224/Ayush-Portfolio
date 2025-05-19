import React from "react";
import { mainContent } from "./Content";
import img from "../assets/Images/Ayush-img.jpg";
import { motion } from "motion/react";

const animate1 = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const NameContent = () => {
  return (
    <div>
      <div className="flex flex-wrap pb-4 lg:mb-40">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:ml-20">
            <motion.h1
              variants={animate1(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-4xl lg:text-7xl lg:mt-16 font-thin tracking-tight"
            >
              Ayush Sharma
            </motion.h1>
            <motion.p
              variants={animate1(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-2xl lg:text-4xl tracking-tight bg-gradient-to-r from-purple-500 via-slate-400 to-pink-300 bg-clip-text text-transparent"
            >
              Frontend Web Developer
            </motion.p>
            <motion.p
              variants={animate1(1)}
              initial="hidden"
              animate="visible"
              className="py-6 tracking-tight font-light max-w-xl text-justify "
            >
              {mainContent}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 100, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl h-80 mr-55 -z-1 lg:h-90 "
              src={img}
              alt="Ayush Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameContent;
