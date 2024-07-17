import React from 'react'

const Heading = ({ heading }) => {
  return (
    <h2 className="mx-auto max-w-max rounded-md p-3 text-2xl md:text-4xl lg:text-5xl tracking-[10px] text-red-500 border-2 border-red-500 cursor-pointer">{heading}</h2>
  )
}

export default Heading
