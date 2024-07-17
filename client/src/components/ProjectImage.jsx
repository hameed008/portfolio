import React from 'react'
const ProjectImage = ({ project, justify, order }) => {
  return (
    // <div className="project-img w-[85%] sm:w-[70%] md:w-full xl:w-[50%]  max-h-[250px] 2xl:max-h-[350px] shadow-xl bg-white text-white z-10 mx-auto group pt-2">
    <div className={` w-full project-img-wrapper ${order} lg:order-1 z-10 lg:flex`} style={{ justifyContent: `${justify}` }}>
      <a href=""> <img src={project.url} alt="" className=' w-[400px] md:w-[450px] lg:w-[500px] rounded-sm hover:scale-[1.1] duration-200 mx-auto' /></a>

      {/* //   {/* <div className='p-5 w-full flex justify-between bg-gray-500'>
    //     <button>{project.button[0]}</button>
    //     <button>{project.button[1]}</button>
    //   </div> 
    </div> */}
    </div>
  )
}

export default ProjectImage
