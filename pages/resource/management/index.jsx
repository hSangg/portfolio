import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  return (
    <motion.div>
      <motion.div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <motion.h1 className='OffBit-101Bold uppercase'>
          Resource Management
        </motion.h1>
        <div className='flex justify-center gap-2'>
          <Link
            href={'/resource/management/AddItem'}
          >
            <button className='text-red-500 CODEINK-Regular bg-white px-1'>
              ADD
            </button>
          </Link>
          <Link
            href={'/resource/management/EditItem'}
          >
            <button className='text-green-500 CODEINK-Regular bg-white px-1'>
              EDIT
            </button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Index
