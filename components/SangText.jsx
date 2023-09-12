import { motion } from 'framer-motion'
import Image from 'next/image'
const SangText = () => {
  return (
    <motion.div className='flex items-center justify-center '>
      <Image
        src='/my-name.jpg'
        width='1300px'
        height='500px'
        objectFit='contain'
        loading='lazy'
        alt=''
      />
    </motion.div>
  )
}

export default SangText
