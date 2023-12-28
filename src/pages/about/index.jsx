import React from 'react'
import myphoto from '../../assets/images/be.JPG';
import mycv from '../../assets/cv/mycv.pdf';
import Title from '../../components/ui/Title';
import {HiDownload} from 'react-icons/hi'



const Index = () => {


  const skills = ["React.js","Node.js","Express.js","Java","Python","Golang","MongoDB","MySql",
          "Docker","K8s","Github","Gitlab","Jenkins","Terraform","Ansible",
          "Aws","Azure",];

  return (
    <div>
        <Title>About Me</Title>
        <div className='flex flex-wrap-reverse mt-4 gap-6'>
          <div className='md:flex-1'>
            <p className='font-light text-lg'>Hey! I am Oussama, a software engineering student At INPT, 
            and also DevOps and Cloud engineer.
            I currently live in Rabat, Morocco.
            </p>
            <div className='mt-4 p-1 border bg-gray-100 inline-block text-blue-400 sm:text-base text-sm'>
              <a href={mycv} download>
                  <div className='flex gap-2 items-center'>
                    <HiDownload />
                    Download My Resume
                  </div>
              </a>
            </div>
            <div>
                <Title>Skills</Title>
                <div className='mt-4 grid grid-cols-3 gap-2'>
                    {
                      skills.map((skill,i) => (
                        <span className='border text-sm border-black text-center
                        py-1 px-2 rounded-md hover:bg-gray-800 hover:text-white'
                        key={i}>{skill}</span>
                      ))
                    }
                </div>
            </div>
          </div>
          <div className='md:flex-1 p-2 border shadow-xl mb-auto rounded-full'>
            <div className='rounded-full overflow-hidden'>
              <img
                src={myphoto}
                alt=""
                className='object-cover w-full h-full'
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Index