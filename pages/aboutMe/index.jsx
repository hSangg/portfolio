import { motion } from 'framer-motion'
import AboutMe from '../../components/AboutMe'
import ILiveInDormitory from '../../components/ILiveInDormitory'
import { BiChevronLeft } from 'react-icons/bi'
import { useRouter } from 'next/router'
import Back from '../../components/Back'

const Index = () => {
  const router = useRouter()
  return (
    <motion.div className=''>
      <Back />
      <motion.div className='mx-[20px] lg:mx-[50px]'>
        <AboutMe />
        <ILiveInDormitory />
      </motion.div>
    </motion.div>
  )
}

export default Index
