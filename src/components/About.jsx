import React from "react";
import { aboutText } from "./Content";
import aboutImg from "../assets/Images/AboutMe-img.jpg";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="pb-4 lg:mb-30">
      <div>
        <h1 className="my-20 text-center text-4xl">About Me</h1>
      </div>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center items-center">
            <img
              className="rounded-2xl lg:h-80"
              src={aboutImg}
              alt="about-image"
            />
          </div> 
        </motion.div>
        <motion.div
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="py-6 tracking-tight font-light max-w-xl text-justify">
              {aboutText}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
