import React from 'react'
import Image from 'next/image'
import { GrStarOutline } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { openURL } from '../../util/utils'

function WeatherAQI() {
  return (
    <div className='mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <div>
        <h1 className='text-4xl uppercase text-justify'>
          Forecasting Air Quality Index Levels in
          Three Vietnamese Cities Using Machine
          Learning and Deep Learning Techniques.
        </h1>

        <div>
          <h1 className='text-3xl uppercase mt-8 font-semibold'>
            Responsibilities
          </h1>
          <ul className='list-disc mt-2 text-2xl text-justify'>
            <li>
              Research methodology of{' '}
              <span className='AccanthisADFStdNo3-BoldItalic'>
                GaussNewton Nonlinear Method
              </span>{' '}
              and{' '}
              <span className='AccanthisADFStdNo3-BoldItalic'>
                Gated Recurrent Unit (GRU).
              </span>
            </li>
            <li>
              Implement both method in Python
            </li>

            <li>
              Apply them to our dataset about
              three big cities in Vietnam: Ha Noi,
              Viet Tri and Da Nang
            </li>
          </ul>
        </div>

        <div>
          <h1 className='text-3xl uppercase mt-8 font-semibold'>
            Skills
          </h1>
          <ul className='list-disc mt-2 text-2xl '>
            <li>Latex </li>
            <li>Python, Sklearn</li>
            <li>
              Jupiter notebook, Google colab
            </li>
            <li>Analysis data</li>
            <li>
              Model evaluation using MAPE, MAE,
              MSE
            </li>
          </ul>
        </div>

        <div
          onClick={() =>
            openURL(
              'https://github.com/hsangUIT/IS403_O21_20'
            )
          }
          className='flex mt-4 gap-4 items-center'
        >
          <button className='flex items-center rounded-full gap-2 justify-center bg-blue-500 px-8 py-4'>
            <GrStarOutline
              size={30}
              color='yellow'
            />
            <h2 className='text-2xl'>
              Read our paper & code
            </h2>
          </button>
        </div>
      </div>

      <motion.div
        whileInView={{
          opacity: [0, 1],
          scale: [0.9, 1],
        }}
        className=''
      >
        <Image
          src={'/collaboration/paper.webp'}
          alt=''
          title=''
          width='75.7885763%'
          height='100%'
          layout='responsive'
          objectFit='contain'
        />
      </motion.div>
    </div>
  )
}

export default WeatherAQI
