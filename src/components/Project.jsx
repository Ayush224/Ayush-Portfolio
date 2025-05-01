import React from "react";
import { Projects } from "./Content";
import { motion } from "motion/react";

const Project = () => {
  return (
    <div className="pb-4 lg:mb-20">
      <div>
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h1>
        {Projects.map((proj, index) => (
          <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex justify-center w-full lg:w-1/2"
            >
              <img
                className="mb-6 rounded "
                src={proj.image}
                height={250}
                width={250}
                alt={proj.title}
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-2 font-semibold">{proj.title}</h6>
              <p className="mb-4 text-sm text-gray-400 text-justify tracking-tight">
                {proj.description}
              </p>
              {proj.tech.map((tech, index) => (
                <span
                  key={index}
                  className="rounded bg-neutral-800 px-2 py-1 text-sm mt-4 mr-2 text-green-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
