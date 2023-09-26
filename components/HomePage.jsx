import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import {
  SiBehance,
  SiFacebook,
  SiFlickr,
  SiLinkedin,
} from 'react-icons/si'
import { VscGithubInverted } from 'react-icons/vsc'
import { textAnimate } from '../util/framer_motion'

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const deg = useTransform(
    scrollYProgress,
    [0, 1],
    ['0', '180']
  )
  return (
    <motion.div className='homepage hidden lg:block p-[50px] w-full overflow-hidden'>
      <motion.div className='flex'>
        <motion.div
          className='flex flex-col z-10 px-[50px]
        bg-white text-black rounded-lg
        text-[6rem] uppercase leading-[6rem]'
        >
          <motion.div
            whileInView={{
              width: ['0%', '100%'],
            }}
            className='PexelGrotesk overflow-hidden'
          >
            Welcome
          </motion.div>
          <motion.div className='PexelGrotesk flex gap-3'>
            <div>To my</div>
            <motion.div
              className='grow'
              whileInView={{
                scaleX: [0, 1],
                opacity: [0, 1],
              }}
              transition={{ duration: 0.2 }}
            >
              <Image
                objectFit='contain'
                src={'/1x/Asset2.jpg'}
                width={'200%'}
                height={'70%'}
              />
            </motion.div>
          </motion.div>

          <motion.div className='PexelGrotesk'>
            <span className='EurekaEndeavour'>
              P
            </span>
            ortfoli
            <span className='EurekaEndeavour'>
              o
            </span>
          </motion.div>
        </motion.div>

        <motion.div className='relative grow '>
          <Image
            layout='fill'
            objectFit='cover'
            src={'/combo1.png'}
          />
        </motion.div>
      </motion.div>
      <motion.div className=''>
        <Image
          src={'/Asset3.png'}
          width='100%'
          height='33.6268575%'
          objectPosition={'top'}
          layout='responsive'
          objectFit='contain'
        />
      </motion.div>

      {/* THIS IS FOLLOWING ME ✅  */}
      {/* <div className='mt-5'>
        <h1 className='font-bold text-2xl mb-2 text-center lg:text-left '>
          Following me
        </h1>
        <motion.ul
          initial={{ scaleY: 0 }}
          whileInView={{
            scaleY: 1,
            transformOrigin: 'top center',
          }}
          transition={{
            type: 'spring',
            duration: 0.5,
          }}
          className='flex flex-row sm:gap-5 lg:gap-4 lg:flex-col texl-xl opacity-80'
        >
          <motion.li
            onClick={() => {
              window.open(
                'https://github.com/hSangg',
                '_blank'
              )
            }}
            className='flex p-2 lg:p-0 cursor-pointer items-center gap-2'
          >
            <VscGithubInverted size='25px' />
            <div className='hidden lg:block'>
              hSangg
            </div>
          </motion.li>

          <motion.li
            onClick={() => {
              window.open(
                'https://www.linkedin.com/m/in/cao-sang-b91b19226',
                '_blank'
              )
            }}
            className='flex p-2 lg:p-0 cursor-pointer items-center gap-2'
          >
            <SiLinkedin size='25px' />

            <div className='hidden lg:block'>
              Cao Sang
            </div>
          </motion.li>

          <motion.li
            onClick={() => {
              window.open(
                'https://www.facebook.com/sangcanhcut/',
                '_blank'
              )
            }}
            className='flex p-2 lg:p-0 cursor-pointer items-center gap-2'
          >
            <SiFacebook size='25px' />
            <div className='hidden lg:block'>
              Sang_Hoai
            </div>
          </motion.li>

          <motion.li
            onClick={() => {
              window.open(
                'https://www.behance.net/hoaisang',
                '_blank'
              )
            }}
            className='flex p-2 lg:p-0 cursor-pointer items-center gap-2'
          >
            <SiBehance size='25px' />
            <div className='hidden lg:block'>
              Cao Sang
            </div>
          </motion.li>

          <motion.li
            onClick={() => {
              window.open(
                'https://www.flickr.com/photos/sangcanhcut/',
                '_blank'
              )
            }}
            className='flex p-2 lg:p-0 cursor-pointer items-center gap-2'
          >
            <SiFlickr size='25px' />
            <div className='hidden lg:block'>
              Sang Cao
            </div>
          </motion.li>
        </motion.ul>
      </div> */}
      {/* <motion.ul
        initial={{ opacity: 0, y: 60 }}
        viewport={{ once: false, amount: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        className='absolute top-3  lg:left-0
       bg-gradient-to-b from-indigo-500 
       p-4 rounded-lg overflow-hidden'
      >
        <motion.li
          className='flex mb-2 
        align-middle gap-2'
        >
          <MdPhone size={20} color='white' />
          <div className='font-semibold'>
            +84944552050
          </div>
        </motion.li>

        <motion.li
          className='flex mb-2 
        align-middle gap-2'
        >
          <MdEmail size={20} color='white' />
          <div className='font-semibold'>
            hoai.sang050@gmail
          </div>
        </motion.li>
      </motion.ul> */}
    </motion.div>
  )
}

export default HomePage
