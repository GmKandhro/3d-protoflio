/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import { styles } from "../styles";
import herobg from '../assets/herobg.png'
import { BsFacebook } from 'react-icons/bs';
// import { AiOutlineaedin} from 'react-icons/ai'
import { BiLogoUpwork} from 'react-icons/bi'
import { TbBrandFiverr} from 'react-icons/tb'
import photo from '../assets/photo.jpg'




const Hero = () => {
  return (
    <section style={{ backgroundImage:`url(${herobg})`, backgroundRepeat:'no-repeat',backgroundSize:'cover' }} className={`relative w-full h-screen z-[-1] flex flex-col mt-[0px] lg:flex-row justify-between`}>

      <div
        className={` inset-0 mt-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className=' flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Shahzad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Graphic designer <br className='sm:block hidden' />
            create best designs and logos
          </p>
        </div>
      </div>

      <div className='flex lg:mt-10 justify-center items-center  lg:mr-12 z-[100] relative'>
      
      <img width={600} height={200} alt='herosection' className='rounded-[100px] w-[400px] md:w-[340px] border-4 opacity-[0.8]' src={photo} />
    
    <div className="z-12">

    </div>
</div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#cccccc] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
