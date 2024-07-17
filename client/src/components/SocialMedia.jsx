import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='flex gap-6 text-xl my-4 text-red-500'>
      <div>
        <a href="https://www.linkedin.com/in/hameed008/"><FaLinkedin className='hover:text-white' /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/hameed_khan008/"><FaInstagram className='hover:text-white' /></a>
      </div>
      <div>
        <a href="https://x.com/hameed_khan008"><FaXTwitter className='hover:text-white' /></a>
      </div>
      <div>
        <a href="https://github.com/hameed008"><FaGithub className='hover:text-white' /></a>
      </div>
    </div>
  )
}

export default SocialMedia
