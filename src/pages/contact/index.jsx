import React, { useState } from 'react';
import Title from '../../components/ui/Title';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleMessage = () => {
    setMessage('Message sent successfully.');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <div>
      <Title>Contact Me</Title>
      <div className='mt-4'>
        <p className='font-light sm:text-lg text-base'>
          If you have any questions, suggestions, Job offer or just want to say hello, feel free to reach out to me. I would
          love to hear from you!
        </p>
        <a
          href='mailto:akhmis.oussama@gmail.com'
          className='my-4 border p-2 rounded-xl sm:inline-block flex justify-center sm:mx-auto mx-4 shadow-xl'
        >
          <div className='flex gap-1 items-center sm:text-base text-sm '>
            <HiOutlineMail className='text-2xl ' />
            akhmis.oussama@gmail.com
          </div>
        </a>
        <div>
          <Title addClass={'!text-xl !font-medium text-center'}>Social Media</Title>
          <div className='mt-4 flex flex-col items-center gap-4'>
            <ul className='grid grid-cols-4 gap-4'>
              <a href='https://www.instagram.com/oussama_amjad/' target='_blank'>
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-yellow-500 to-pink-500'
                >
                  <FaInstagram className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
              <a href='https://twitter.com/' target='_blank'>
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-cyan-500 to-blue-500'
                >
                  <BsTwitter className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
              <a href='https://www.linkedin.com/in/oussama-akhmis/' target='_blank'>
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-blue-500 to-gray-800'
                >
                  <AiFillLinkedin className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
              <a href='https://github.com/akhmis-oussama' target='_blank'>
                <li
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-cyan-950 to-gray-950'
                >
                  <BsGithub className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </li>
              </a>
            </ul>
            <div className='border-b border-gray-500 w-1/4 my-4'></div>
          </div>
        </div>
        <Title>Leave a Message</Title>
        <form action=''>
          <div className='mt-6 flex flex-col'>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <Input placeholder='Your Name' required />
              <Input placeholder='Your Surname' required />
            </div>
            <Input placeholder='Email' required />
            <textarea
              name=''
              id=''
              className='border p-4 
            outline-none rounded-xl my-2'
              placeholder='Your Message...'
            ></textarea>
            <span className='sm:text-base text-xs text-green-500 text-center my-2'>{message}</span>
            <Button onClick={handleMessage}>Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
