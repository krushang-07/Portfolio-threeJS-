import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[300px] w-full">

    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-24 h-24 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello! I am a dedicated MERN Stack Developer currently in my 4th year at
        LDRP Institute of Technology and Research in Gandhinagar, pursuing a
        Bachelor's Degree in Engineering. Skilled in MongoDB, Express.js, React,
        and Node.js, I have developed my abilities through various projects,
        workshops, and hackathons. I have a strong passion for problem-solving
        and am eager to contribute to innovative projects while collaborating
        with like-minded professionals to create impactful solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} idex={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
