import React from 'react'
import { RiShareBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";


const ProjectImage = ({ project, justify, order }) => {
  return (
    <div className={` w-full project-img-wrapper ${order} lg:order-1 z-10 mb-4 lg:mt-0 lg:flex flex-col gap-3`} style={{ alignItems: `${justify}` }}>
      <a href=""> <img src={project.url} alt="" className=' w-[400px] md:w-[450px] lg:w-[500px] hover:scale-[1.1] duration-200 mx-auto' /></a>
      <div className='w-full md:w-[450px] mx-auto lg:mx-0 flex gap-4 lg:gap-5 text-white text-md lg:text-2xl mt-1 lg:mt-0'>
        <p className='text-[#FC815C]'>{project.name}</p>
        <button className='hover:scale-[1.1] hover:text-red-500'><a href={project.liveLink} target='blank'><RiShareBoxLine></RiShareBoxLine></a></button>
        <button className='hover:scale-[1.1] hover:text-red-500'><a href={project.sourceLink} target='blank'><FaGithub></FaGithub></a></button>
      </div>
    </div>
  )
}
export default ProjectImage
