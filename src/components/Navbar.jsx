import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/Images/logo.png";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="sticky top-0 z-10"
    >
      <nav className="bg-black flex justify-between items-center mb-20 py-6">
        <div className="flex flex-shrink-0 ">
          <img className="h-14 rounded-2xl" src={logo} alt="logo" />
        </div>
        <div className="flex gap-5 text-2xl">
          <a href="https://github.com/Ayush224" target="_blank">
            <FaGithubSquare />
          </a>
          <a
            href="https://linkedin.com/in/ayush-sharma-66807a189"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://x.com/Ayush07352495" target="_blank">
            <FaSquareXTwitter />
          </a>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
