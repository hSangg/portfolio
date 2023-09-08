import {
  AnimatePresence,
  motion,
} from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
const ImageViewer = ({
  image_link,
  name,
  onChange,
}) => {
  const [loading, setLoading] = useState(true)

  return (
    <motion.div className='fixed inset-0 bg-black/80'>
      <AnimatePresence>
        <motion.div
          className='absolute
      w-[70vw] h-[70vw] sm:w-[60vw] sm:h-[60vw] lg:w-[50vw] lg:h-[50vw] xl:w-[28vw] xl:h-[28vw]
      top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
        >
          <Image
            alt=''
            layout='fill'
            objectFit='contain'
            src={image_link}
            blurDataURL='https://placehold.co/600x400/FFF/png'
            placeholder='blur'
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        onClick={() => {
          onChange()
        }}
        className='CODEINK-Regular cursor-pointer border border-white rounded-full w-10 h-10 text-center leading-10 absolute top-10 left-[50%] translate-x-[-50%]'
      >
        X
      </motion.div>

      <motion.div className='CODEINK-Regular absolute bottom-10 left-[50%] translate-x-[-50%]'>
        {name}
      </motion.div>
    </motion.div>
  )
}

export default ImageViewer
