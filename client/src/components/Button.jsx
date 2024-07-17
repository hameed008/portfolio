import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Button = ({ setShowAbout }) => {
  return (
    <div className="flex mt-10 justify-between text-[20px]">
      <button type="button" className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:bg-red-600 py-2 px-5 rounded-md hover:scale-110 shadow-3xl" onClick={() => { setShowAbout(true) }}>
        About Me  <FaArrowRightLong className='inline ml-2' />
      </button>

    </div>
  )
}

export default Button
