import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
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
      className='relative h-[3000vh] bg-white'
    >
      <div
        className='sticky top-0 flex h-screen 
      items-center overflow-hidden w-full'
      >
        <motion.div
          style={{ x: xTrans }}
          className='flex text-black'
        >
          <div className='text-cente whitespace-nowrap text-[100px]'>
            Hy!{' '}
            <span className='border-b-2 border-indigo-500 italic font-[700]'>
              Mình là Sang
            </span>
            , mình hiện là một sinh viên của UIT
            hay còn được gọi là{' '}
            <span className='text-purple-500 font-[700]'>
              TIU =)
            </span>
            , một nơi mà mình nhận lại những kiến
            thức có thể phục vụ cho nghề nghiệp
            tương lai của mình . Mình là người
            hướng ngoại và khá thích đi ra ngoài
            với bạn bè. Đây sẽ là nơi mà mình chia
            sẽ{' '}
            <span className='text-green-500'>
              -
            </span>{' '}
            về những thứ xung quanh mình{' '}
            <span>.-. </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ScrollingHorizontal
