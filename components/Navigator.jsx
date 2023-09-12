import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
const Navigator = () => {
  const router = useRouter()

  const variants = {
    normal: {
      scale: 0,
      filter: 'brightness(0%)',
    },
    view: {
      scale: 1,
      filter: 'brightness(100%)',
    },
    hover: {
      scale: 1.2,
      filter: 'brightness(150%)',
    },
  }

  return (
    <motion.div className='relative h-screen w-full'>
      <motion.div
        initial='normal'
        whileHover='hover'
        whileInView='view'
        variants={variants}
        onClick={() => {
          router.push('/aboutMe')
        }}
        className='
        absolute top-[20px] right-0
        inline-flex cursor-pointer
      px-5 py-2  items-center gap-5
      text-5xl bg-black  z-10 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'
      >
        <motion.figure>
          <Image
            src='/location-iso-color.png'
            width={40}
            height={40}
            alt='location-iso-color'
          />
        </motion.figure>
        <motion.p className='text-lg'>
          Cuộc sống cụa mình ?
        </motion.p>
      </motion.div>

      <motion.div
        initial='normal'
        whileHover='hover'
        whileInView='view'
        variants={variants}
        onClick={() => {
          router.push('/artistic')
        }}
        className='
        absolute top-[100px] left-0
        inline-flex cursor-pointer flex-row-reverse	
        px-5 py-2 items-center gap-5
      text-5xl bg-black z-10 bg-opacity-20 backdrop-blur-lg rounded-lg drop-shadow-lg'
      >
        <Image
          src='/picture-iso-color.png'
          width={40}
          height={40}
          alt='picture-iso-color'
        />

        <motion.p className='text-lg'>
          Mình thích nghệ thuật ?
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className='absolute  h-[500px] left-10 right-10  z-0'
      >
        <Image
          src='/bg_crack.jpg'
          style={{ borderRadius: '10px' }}
          loading='lazy'
          layout='fill'
          alt='bg-cr'
          objectFit='cover'
        />
      </motion.div>
    </motion.div>
  )
}

export default Navigator
