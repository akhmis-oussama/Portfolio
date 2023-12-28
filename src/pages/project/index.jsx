import React from 'react'
import Title from '../../components/ui/Title'

const Project = () => {

  const projects = [
    {
      name: "Instagram Clone",
      link: "https://github.com/akhmis-oussama/Instagram"
    },
    {
      name: "Musical Haven",
      link: "https://github.com/Irrelvnt/musical-haven"
    },
    {
      name: "DigiWardrobe",
      link: "https://github.com/akhmis-oussama/Mcommerce"
    },
    {
      name: "Exams Downloader",
      link: "https://github.com/akhmis-oussama/Containerization-Orchestration"
    },
    {
      name: "Expenses Tracker",
      link: "https://github.com/akhmis-oussama/ExpensesTracker"
    },
    {
      name: "E-HealthMate",
      link: "https://github.com/akhmis-oussama/E-healthmate"
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