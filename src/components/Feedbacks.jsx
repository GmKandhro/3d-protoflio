import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn,textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { testimonials } from '../constants'
import { Tilt } from 'react-tilt'

const FeedBackCard =({index , testimonial,company,name,image,designation})=>(
  <Tilt
  options={{
    max:45,
    scale:1,
    speed:450,
  }}
  // className='bg-[#172b49] p-5 rounded-2xl sm-w-[360px] w-[340px]'
  >
<motion.div 
variants={fadeIn('','spring',index*0.5,0.75)}
className='bg-[#14233f] p-10 rounded-3xl xs:w-[320px] w-[320px] width'
>
  <p className='text-white font-black text-[48px]'>"</p>
  <div className="mt-1">
  <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
  <div className='mt-7 flex justify-between items-center gap1'>
    <div className="flex flex-1 flex-col">
      <p classNam='text-white font-medium text-[16px]'>
        <span>@</span> {name}
      </p>
      <p className='blue-text-gradient mt-1 text-[12px]'>
        {designation } of {company}
      </p>
    </div>
    <img src={image} alt="img" className='w-10 h-10 rounded-full object-cover' />
  </div>
  </div>

</motion.div>
</Tilt>
)

const Feedbacks = () => {
  return (
    <div className="mt12 bg-[#8a8a8a] rounded-[20px]">
    <div className={ `${styles.padding} bg-[#162b49] rounded-2xl min-h-[300px]`}>
  
    <motion.div variants={textVariant()}> 
      <p className={styles.sectionSubText}>What other say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
   </motion.div>
    </div>
   
   <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center`}>
    {testimonials.map((testimonial , index)=>(
      <FeedBackCard  key={testimonial.name} index={index} {...testimonial}/>
    ))} 
   </div>
  </div>
  )
}

export default SectionWrapper(Feedbacks,'')