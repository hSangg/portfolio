import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { GrStarOutline } from 'react-icons/gr'
import { motion } from 'framer-motion'
import { openURL } from '../../util/utils'
import { textAnimate } from '../../util/framer_motion'

function WeatherAQI() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Fake loading time of 2 seconds

    return () => clearTimeout(timer)
  }, [])

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
          <motion.ul
            initial={'offscreen'}
            whileInView={'onscreen'}
            transition={{ staggerChildren: 0.05 }}
            className='list-disc mt-2 text-2xl text-justify'
          >
            <motion.li variants={textAnimate}>
              Research methodology of{' '}
              <span className='AccanthisADFStdNo3-BoldItalic'>
                GaussNewton Nonlinear Method
              </span>{' '}
              and{' '}
              <span className='AccanthisADFStdNo3-BoldItalic'>
                Gated Recurrent Unit (GRU).
              </span>
            </motion.li>
            <motion.li variants={textAnimate}>
              Implement both method in Python
            </motion.li>
            <motion.li variants={textAnimate}>
              Apply them to our dataset about
              three big cities in Vietnam: Ha Noi,
              Viet Tri and Da Nang
            </motion.li>
          </motion.ul>
        </div>

        <div>
          <h1 className='text-3xl uppercase mt-8 font-semibold'>
            Skills
          </h1>
          <motion.ul
            initial={'offscreen'}
            whileInView={'onscreen'}
            transition={{ staggerChildren: 0.05 }}
            className='list-disc mt-2 text-2xl '
          >
            <motion.li variants={textAnimate}>
              Latex{' '}
            </motion.li>
            <motion.li variants={textAnimate}>
              Python, Sklearn
            </motion.li>
            <motion.li variants={textAnimate}>
              Jupyter notebook, Google colab
            </motion.li>
            <motion.li variants={textAnimate}>
              Data analysis
            </motion.li>
            <motion.li variants={textAnimate}>
              Model evaluation using MAPE, MAE,
              MSE
            </motion.li>
          </motion.ul>
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
        {isLoading ? (
          <div className='w-full h-96 bg-gray-300 animate-pulse'></div>
        ) : (
          <Image
            src={'/collaboration/paper.webp'}
            alt=''
            title=''
            width='75.7885763%'
            height='100%'
            layout='responsive'
            objectFit='contain'
          />
        )}
      </motion.div>
    </div>
  )
}

export default WeatherAQI
