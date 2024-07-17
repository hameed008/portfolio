import React from 'react'
import Heading from './Heading'
import projectData from '../constant/projectData'
import ProjectImage from './ProjectImage'
import ProjectDetails from './ProjectDetails'

const Projects = () => {
  const [project1, project2] = projectData;
  return (
    <section className='relative project-section max-w-[100%] mx-auto mt-10 pb-10'>
      <Heading heading="Projects"></Heading>
      <div className="project1 w-full grid grid-cols lg:grid-cols-2 gap-2 lg:gap-10 mx-auto mt-10 lg:mt-16 relative mb-16 md:px-[50px] lg:px-[50px] items-center">
        <ProjectImage project={project1} justify="start" order="order-1"></ProjectImage>
        <ProjectDetails project={project1}></ProjectDetails>
        <a href="" className="circle-dot hidden lg:block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[16px] h-[16px] bg-white border-2 border-red-500 rounded-full hover:scale-[1.2] z-10" target="_blank"></a>
        <div className="circle-extension hidden lg:block absolute top-[50%] left-[50%] -translate-x-[100%] -translate-y-[50%] md:w-[20%] xl:w-[30%] h-[2px] bg-[#FC815C] z-1"></div>
      </div>
      <div className='vertical-line hidden lg:block bg-[#83CD29] absolute top-[148px] left-[50%] -translate-x-[50%] bottom-[0px] w-[2px]'></div>

      <div className='project1 w-full grid grid-cols lg:grid-cols-2 gap-2 lg:gap-10 mx-auto relative mb-16 md:px-[50px] lg:px-[50px] items-center'>
        <ProjectDetails project={project2}></ProjectDetails>
        <ProjectImage project={project1} justify="end"></ProjectImage>

        <a href="" className="circle-dot hidden lg:block absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[16px] h-[16px] bg-white border-2 border-red-500 rounded-full hover:scale-[1.2] z-10" target="_blank"></a>
        <div className="circle-extension hidden lg:block absolute top-[50%] left-[50%] -translate-x-[0] -translate-y-[50%] md:w-[20%] xl:w-[30%] h-[2px] bg-[#FC815C] z-1"></div>
      </div>
      <div className='vertical-line hidden lg:block bg-[#83CD29] absolute top-[77px] left-[50%] -translate-x-[50%] bottom-[0px] w-[2px]'></div>



    </section>
  )
}
export default Projects

