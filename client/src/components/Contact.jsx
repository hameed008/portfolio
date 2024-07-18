
import React, { useRef, useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { HiOutlineAtSymbol } from "react-icons/hi";
import { FiMessageSquare } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import Heading from './Heading'
import authenticateUser from '../api';

const Contact = () => {
  const initialData = {
    name: "",
    email: "",
    message: ""
  }
  const form = useRef();
  const [user, setUser] = useState(initialData)
  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await authenticateUser(user);
    //console.log(response);
    setUser({
      name: "",
      email: "",
      message: ""
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;
    // console.log(name)
    if (name != "" && email != "" && message != "") {
      emailjs
        .sendForm('service_mvi06sf',
          'template_1p04qyz',
          form.current, {
          publicKey: 'ICBkaA-qCYRoaNcsb',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } else {
      console.log('Please fill all the fields')
    }
    form.current.reset();
  };
  return (
    <div>
      <Heading heading="Let's Connect"></Heading>
      <div className='w-[full] flex items-center justify-center lg:gap-10 bg-[#293140] mt-10 rounded-sm'>
        <div className='hidden lg:block'>
          <img src="contact-me.svg" alt="contact me" />
        </div>
        <form ref={form} onSubmit={(e) => { sendEmail(e); registerUser(e); }} className='basis-full lg:basis-3/5 flex flex-col gap-7 mx-auto px-5 py-10 lg:p-20 rounded-md'>
          <div className='w-full'>
            <div className='flex items-center gap-1 text-lg text-white'>
              <FaRegUser className='' />
              <label htmlFor="name" className='inline'>Name <span className='text-red-500 text-[12px] lg:text-xl'>*</span></label>
            </div>
            <input type="text" id="name" name="name" placeholder='Enter your name' className='w-full p-2 mt-2 text-[#111827] rounded-md outline-none bg-gray-100 border-[2px] border-gray-100 focus:border-red-500' onChange={(e) => { handleOnChange(e) }} />
          </div>

          <div className='w-full'>
            <div className='flex items-center gap-1 text-lg text-white'>
              <HiOutlineAtSymbol className='' />
              <label htmlFor="email">Email <span className='text-red-500 text-[12px] lg:text-xl'>*</span></label>
            </div>
            <input type="email" id="email" name="email" placeholder='Enter your email' className="w-full p-2 mt-2 text-[#111827] rounded-md outline-none border-[2px]  border-gray-100 focus:border-red-500 bg-gray-100" onChange={(e) => { handleOnChange(e) }} />
          </div>

          <div className='w-full'>
            <div className='flex items-center gap-1 text-lg text-white'>
              <FiMessageSquare className='' />
              <label htmlFor="">Message <span className='text-red-500 text-[12px] lg:text-xl'>*</span></label>
            </div>
            <textarea id="message" name="message" rows="4" cols="50" placeholder='Type your messege here' className="w-full p-2 mt-2 text-[#111827] rounded-md outline-none border-[2px]  border-gray-100 focus:border-red-500 bg-gray-100" onChange={(e) => { handleOnChange(e) }} />
          </div>
          <input type="submit" value="Send" className='w-full bg-red-500 hover:bg-red-600 duration-150 shadow-md rounded-md p-2 text-lg text-white cursor-pointer' />
        </form>
      </div>
    </div>
  )
}

export default Contact
