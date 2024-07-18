import React from 'react'
const ProjectDetails = ({ project }) => {
  return (
    <div className={`w-full order-1 project-detail py-3 lg:py-5 text-white bg-[#222936] rounded-md px-5 shadow-lg`}>
      <h1 className='text-2xl md:text-3xl mb-3 text-[#0AE928]'>{project.name}</h1>
      <span className='text-lg md:text-xl text-[#0AE928]'>( {project.category} )</span>
      <p className='text-[14px] md:text-[16px] my-3 text-justify'>{project.description}</p>

      <ul className='flex flex-wrap gap-2 '>
        {project.techStack.map((items, i) => (

          <li className='text-sm border-[1px] border-gray-600 text-gray-300 py-1 px-4 rounded-2xl' key={i}>{items}</li>

        ))}
      </ul>
    </div>
  )
}

export default ProjectDetails
