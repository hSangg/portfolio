import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'

const ScrollingHorizontal = () => {
  const refTarget = useRef(null)
  const { scrollYProgress } = useScroll({
    target: refTarget,
  })

  const xTrans = useTransform(
    scrollYProgress,
    [0, 1],
    ['50%', '-50%']
  )

  return (
    <div
      ref={refTarget}
      className='relative h-[500vh] bg-white'
    >
      <div
        className='sticky top-0 flex h-screen 
      items-center overflow-hidden w-full'
      >
        <motion.div
          style={{ x: xTrans }}
          className='flex text-black'
        >
          <div className='text-center whitespace-nowrap text-[100px]'>
            <span>Hy! </span>
            <span className='border-b-2 border-indigo-500 italic font-[700]'>
              My name is <span>Sang</span>
            </span>
            , I&apos;m a software developer intern
            at Bosch. I have a strong background
            in Frontend, Backend &amp; Mobile
            development
            <span>.-.</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ScrollingHorizontal
