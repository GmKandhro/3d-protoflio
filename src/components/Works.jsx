import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn,textVariant } from '../utils/motion';

const ProjectsCard =({index,image,name})=>{
  return(
    <motion.div 
    variants={fadeIn('up','spring',index*0.5,0.75)}
    >
        <Tilt
        options={{
          max:45,
          scale:1,
          speed:450,
        }}
        className='bg-[#172b49] p-5 rounded-2xl sm-w-[100%] width w-[340px]'
        >
          <div className='relative w-full h-[230px] object-fill'>
           <img src={image} alt={name} className='w-full object-fill h-full content-center object-cover rounded-2xl' />
           
           
          </div>
         
        </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
     <motion.div> 
      <p className={styles.sectionSubText}>My work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
   </motion.div>

   <motion.p
    variants= {fadeIn('','',0.1,1)}
    className='mt-3 text-[#a7a4a4] text-[17px] max-w-3xl leading-[30px]'
    >
      Experience and Expertise: I bring 2 years of experience in the field of graphic design, during which I have honed my skills across various design disciplines. My portfolio showcases a diverse array of projects, including branding, web graphics, social media content, and more. I am well-versed in industry-standard design tools such as Adobe Creative Suite (Photoshop, Illustrator,), ensuring the highest quality output.
    </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
      {projects.map((project,index)=>(
          <ProjectsCard  key={`project-${index}`} {...project} index={index}/>
      ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works ,'')