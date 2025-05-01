import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "motion/react";

const animate1 = (d) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: d,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-4 lg:mb-40">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap justify-center items-center gap-4"
        >
          <motion.div
            variants={animate1(1.5)}
            initial="initial"
            animate="animate"
            className="flex rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaHtml5 className="text-6xl text-orange-400" />
          </motion.div>
          <motion.div
            variants={animate1(2.5)}
            initial="initial"
            animate="animate"
            className="flex rounded-2xl border-4 border-neutral-800 p-4"
          >
            <IoLogoCss3 className="text-6xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={animate1(3)}
            initial="initial"
            animate="animate"
            className="flex rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaJsSquare className="text-6xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={animate1(4)}
            initial="initial"
            animate="animate"
            className="flex rounded-2xl border-4 border-neutral-800 p-4"
          >
            <FaReact className="text-6xl text-cyan-500" />
          </motion.div>
          <motion.div
            variants={animate1(2.8)}
            initial="initial"
            animate="animate"
            className="flex rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMysql className="text-6xl text-blue-800" />
          </motion.div>
          <motion.div
            variants={animate1(5)}
            initial="initial"
            animate="animate"
            className="flex rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiTailwindCssFill className="text-6xl text-cyan-500" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
