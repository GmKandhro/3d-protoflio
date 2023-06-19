import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
const ServicesCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-full w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.8 * index, 0.75)}
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
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overviwe.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#a7a4a4] text-[17px] max-w-3xl leading-[30px]"
      > I'm a skilled softer developer and work expreience in reactjs,nextjs,
        and tailwind css Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Perspiciatis sed illo asperiores!
      </motion.p>

      <div className="flex flex-wrap mt-20 gap-10 justify-center">
        {services.map((services, index) => {
          return (
            <ServicesCard key={services.title} index={index} {...services} />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
