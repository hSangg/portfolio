import React from 'react'
import { CiMobile1, CiText } from 'react-icons/ci'
import { CiRead } from 'react-icons/ci'
import { CiDatabase } from 'react-icons/ci'
import { CiServer } from 'react-icons/ci'

import { CiStar } from 'react-icons/ci'

export const Skills = () => {
  return (
    <div className='container mt-10 mx-auto w-full flex flex-col divide-y-2 gap-4 divide-white/20'>
      <h1 className='text-5xl text-justify font-bold mb-4'>
        SKILLS
      </h1>

      <div className='flex gap-2 items-center pt-4'>
        <CiText
          size={70}
          className='min-w-[150px]'
        />
        <h1 className='text-5xl text-justify'>
          UI/UX: PHOTOSHOP, ILLUSTRATOR, FIGMA
        </h1>
      </div>

      <div className='flex gap-2 items-center pt-4'>
        <CiRead
          size={70}
          className='min-w-[150px]'
        />
        <h1 className='text-5xl text-justify'>
          FRONTEND: REACTJS/NEXTJS, HTML, CSS,
          JAVASCRIPT/TYPESCRIPT, JAVAFX
        </h1>
      </div>

      <div className='flex gap-2 items-center pt-4'>
        <CiMobile1
          size={70}
          className='min-w-[150px]'
        />
        <h1 className='text-5xl text-justify'>
          MOBILE: REACT NATIVE
        </h1>
      </div>

      <div className='flex gap-2 items-center pt-4'>
        <CiStar
          size={70}
          className='min-w-[150px]'
        />
        <h1 className='text-5xl text-justify'>
          BACKEND: ASP.NET, NODEJS
        </h1>
      </div>

      <div className='flex gap-2 items-center pt-4'>
        <CiDatabase
          size={70}
          className='min-w-[150px]'
        />
        <h1 className='text-5xl text-justify'>
          DATABASE: SQL SERVER, ORACLE, MYSQL,
          MONGODB, FIRESTORE
        </h1>
      </div>

      <div className='flex gap-2 items-center pt-4'>
        <CiServer
          size={70}
          className='min-w-[150px]'
        />
        <h1 className='text-5xl text-justify'>
          DATA: JUPITER NOTEBOOK, PYTHON FOR
          ANALYSIS
        </h1>
      </div>
    </div>
  )
}
