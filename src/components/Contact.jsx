import { motion } from 'framer-motion'
import React,{useState,useRef} from 'react'

import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { EarthCanvas } from './canvas'
import { styles } from '../styles'


const Contact = () => {
  const formRef = useRef;
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const  [ loading,setLoading] = useState(false)

  const handleChange = () =>{}

  const handleSubmit = () =>{}

  return (
   <div className='xl:mt-12 xl:flex col flex flex-row-reverse overflow-hidden gap-10'>
    <motion.div variants={slideIn('left','tween',0.2 ,1)} className='flex-[0.75] bg-[#141b31] p-8 rounded-2xl'>
      <p  className={`${styles.sectionSubText}`}>Get in Touch</p>
      <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

      <form 
      onSubmit={handleSubmit}
      className='mt-12 flex flex-col gap-8'
      >

        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Name</span>
          <input type="text" 
          value={form.value}
          name='name'
          onChange={handleChange}
          placeholder={`What's your name?`}
        className='bg-tertiary py-4 px-6 placeholder:text-[#c9c6c6] text-white  rounded-lg outline-none border-none font-medium  
        '
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your email</span>
          <input type="email" 
          value={form.email}
          name='email'
          onChange={handleChange}
          placeholder={`What's your email?`}
        className='bg-tertiary py-4 px-6 placeholder:text-[#a5a3a3] text-white  rounded-lg outline-none border-none font-medium  
        '
          />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>Your Message</span>
          <textarea
          rows={7}
          value={form.message}
          name='message'
          onChange={handleChange}
          placeholder={`What do you say?`}
        className='bg-tertiary py-4 px-6 placeholder:text-[#a5a3a3] text-white  rounded-lg outline-none border-none font-medium  
        '
          />
        </label>
        <button
        type='submit'
        className='bg-[#2b274d] py-3 px-8 outline-none border-none font-medium rounded-xl w-36 ' 
        >
          {loading ? 'Sending':'Send'}
        </button>
      </form>
    </motion.div>
    <motion.div variants={slideIn('right','tween',0.2 ,1)} className='xl:flex-1 xl:h-[550px] h-[350px]'>
      <EarthCanvas />
    </motion.div>

   </div>
  )
}

export default  SectionWrapper(Contact,'contact')