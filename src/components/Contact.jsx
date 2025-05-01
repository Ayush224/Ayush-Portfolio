import { contact } from "./Content";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="pb-4 mt-60 lg:mb-10">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 pb-5 border-b border-white text-center text-3xl"
      >
        Connect With Me
      </motion.h1>
      <div className="text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          Lives in {contact.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 mb-10"
        >
          Contact me through email at{" "}
          <a href="mailto:yath.sharma04@gmail.com" target="_blank">
            <u>G-mail</u>
          </a>
        </motion.p>
        <p>
          &#169; Made by Ayush Sharma with{" "}
          <span className="text-red-700 text-2xl">&#9829;</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Contact;
