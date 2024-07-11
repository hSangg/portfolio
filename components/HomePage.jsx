import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { textAnimate } from '../util/framer_motion'

const HomePage = () => {
  const openURL = (url) => {
    window.open(url)
  }

  return (
    <motion.div className='hidden lg:block h-[200vh] w-full mt-20 '>
      <motion.div className='w-full h-[200vh] relative '>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            scale: [0.2, 1],
            transition: {
              type: 'spring',
              duration: 0.1,
            },
          }}
          className='absolute top-10 left-10 w-[400px] h-[216px]'
        >
          <Image
            alt=''
            src={'/Asset4.png'}
            layout='fill'
            objectFit='contain'
          />
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            scale: [0.2, 1],
            transition: {
              type: 'spring',
              duration: 0.1,
            },
          }}
          className='absolute top-[400px] right-10 w-[455px] h-[304px]'
        >
          <Image
            alt=''
            src={'/1x/Asset6.png'}
            layout='fill'
            objectFit='contain'
          />
        </motion.div>

        <motion.div
          whileInView={{
            opacity: [0, 1],
            scale: [0.2, 1],
            transition: {
              type: 'spring',
              duration: 0.1,
            },
          }}
          className='absolute top-[800px] flex flex-col'
        >
          <motion.h1
            onClick={() =>
              openURL(
                'https://www.linkedin.com/in/cao-sang-b91b19226/'
              )
            }
            whileHover={{
              color: '#b91c1c',
            }}
            className='text-[150px] cursor-pointer leading-[140px]'
          >
            LINKEDIN
          </motion.h1>
          <motion.h1
            onClick={() =>
              openURL('https://github.com/hSangg')
            }
            whileHover={{
              color: '#b91c1c',
            }}
            className='text-[150px] cursor-pointer leading-[140px]'
          >
            GITHUB
          </motion.h1>
        </motion.div>

        <motion.div
          className='z-10 pt-10 
          mix-blend-exclusion pointer-events-none CODEINK
        sticky top-[50%] text-[100px] 
        translate-y-[-70%] flex justify-center items-end'
        >
          <motion.h1
            initial='offscreen'
            whileInView='onscreen'
            transition={{
              type: 'spring',
              staggerChildren: 0.1,
            }}
            className='Desirable_Calligraphy leading-[222px] flex gap-1'
          >
            {'Portfolio'
              .split('')
              .map((x, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    background: 'red',
                  }}
                  variants={textAnimate}
                >
                  {x}
                </motion.div>
              ))}
          </motion.h1>
          <motion.h1
            initial='offscreen'
            whileInView='onscreen'
            transition={{
              type: 'spring',
              staggerChildren: 0.1,
              delayChildren: 0.9,
            }}
            className='DFVN_afronaut '
          >
            {'Website'
              .split('')
              .map((x, index) => (
                <motion.span
                  key={index}
                  whileHover={{ opacity: 0.6 }}
                  variants={textAnimate}
                >
                  {x}
                </motion.span>
              ))}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HomePage
