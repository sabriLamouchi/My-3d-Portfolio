import React from 'react'
import  {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../style'
import { github,live} from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects. </h2>
      </motion.div>
      <div className='w-full flex flex-col'>
        <motion.p 
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Folowing projects showcases my skills
          and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it. It reflects my ability  to solve complex problems , work with diffrent technologies, and manage projects effectively.
        </motion.p>
        <div className='flex flex-wrap m-10 gap-7 '>
          {projects.map((project,index)=>
          <ProjectCard key={`project${index}`} {...project} />)}
        </div>
      </div>
    </>
  )
}


const ProjectCard=({index, name, description, tags , image, source_code_link,live_link,status })=>{
  return(
    <motion.div variants={fadeIn("up", "spring",index*0.5 ,0.75)}>
       <Tilt
       options={{
        max:45,
        scale:1,
        speed:450
       }}
       className="bg-tertiary p-5 rounded-2xl  sm:w-[360px]  w-full"
       >
        <div className='relative w-full h-[230px] '>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={()=>window.open(source_code_link,"_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-start items-center cursor-pointer'
            >
              <img src={github} alt="github"/>
            </div>
            
          </div>
          <div className='absolute inset-0 top-[20%] flex justify-end m-3 card-img_hover'>
            <div onClick={()=>window.open(live_link,"_blank")}
              className='bg-white w-10 h-10 rounded-full flex justify-start items-center cursor-pointer'
              >
              <img src={live} alt="github"/>
            </div>
            
           </div>

        </div>
        <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 w-full flex items-center'>
        <div className='w-[75%] self-start'>
          <h3 className='text-white text-[20px] font-semibold '>
              Tech I used.
            </h3>
            <div className=' flex flex-wrap '>
              {tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] 
              ${tag.color}`} >
                #{tag.name}
              </p>))}
          </div>
        </div>
        <div className={status=="Process" ? "text-red-600 relative right-0 ":"text-green-600 relative right-0"}>
          {
            status
          }
        </div>
        </div>
       </Tilt>
    </motion.div>
    
  );
}

export default SectionWrapper(Works,'works')