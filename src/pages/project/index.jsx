import React from 'react'
import Title from '../../components/ui/Title'

const Project = () => {

  const projects = [
    {
      name: "Instagram Clone",
      link: "https://shopme-brown.vercel.app/"
    },
    {
      name: "Musical Haven",
      link: "https://food-ordering-eta.vercel.app/"
    },
    {
      name: "DigiWardrobe",
      link: "https://github.com/mehmetkaplanse/FullStackPosApp"
    },
    {
      name: "Exams Downloader",
      link: "https://github.com/mehmetkaplanse/ecommerce-app-with-react"
    },
    {
      name: "Expenses Tracker",
      link: "https://github.com/mehmetkaplanse/Lenslight-Project-Nodejs-Express.js-"
    },
    {
      name: "E-HealthMate",
      link: "https://github.com/mehmetkaplanse/Lenslight-Project-Nodejs-Express.js-"
    }
  ]

  return (
    <div>
      <Title>My Projects</Title>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          {
            projects.map((proje,i) => (
              <a href={proje.link} key={i}>
                <div className='border p-4 cursor-pointer shadow-lg bg-gradient-to-r from-gray-400 to-gray-600 
                  rounded-xl hover:scale-105 transition-all h-[100px]'>
                  <h4 className='font-semibold border-b inline-block mb-2 sm:text-xl text-lg'>{proje.name}</h4>
                  <p className='text-white font-semibold flex justify-end'>
                    View
                  </p>
                </div>
              </a>
            ))
          }
      </div>
    </div>
  )
}

export default Project