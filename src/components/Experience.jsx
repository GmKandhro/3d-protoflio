import React from 'react'
import { motion } from 'framer-motion'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard =({experience})=>{
 return(
  <>
  <VerticalTimelineElement
  contentStyle={{background:'#1d1836', color:'#fff'}}
  contentArrowStyle={{borderRight:'7px solid #232631'}}
  date={experience.date}
  iconStyle={{background:experience.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full '>
      <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
    </div>
  }
  >
    <div>
      <h1 className='text-white text-[24px] font-bold'>{experience.title}</h1>
      <p className='text-[#adabab] text-[16px] font-semibold' style={{margin:0}}>{experience.company_name}</p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index)=>(
          <li key={index} className='text-[#dbd9d9] text-[14px] pl-1 tracking-wider' >
            {point}
          </li>
        ))}
      </ul>
    </div>

  </VerticalTimelineElement>
  </>
 ) 
}

const Experience = () => {
  return (
    <>
   <motion.div> 
      <p className={styles.sectionSubText}>What i have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experiences.</h2>
   </motion.div>

   <div className='mt20 flex flex-col'>
    <VerticalTimeline>
      {experiences.map((experience,index)=>{
        return(
          <ExperienceCard key={index} experience={experience} />
        )
      })}
    </VerticalTimeline>
   </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')