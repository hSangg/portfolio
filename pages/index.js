import { motion, useScroll } from 'framer-motion'
import {
  useEffect,
  useRef,
  useState,
} from 'react'
import CV from '../components/CV'
import HomePage from '../components/HomePage'
import BasicLayout from '../components/Layout/BasicLayout'
import MyProject from '../components/MyProject'
import Navigator from '../components/Navigator'
import SangText from '../components/SangText'
import SuffleLetters from '../components/SuffleLetters'

const LIMIT_LOADING = 99

export default function Home() {
  const { scrollYProgress } = useScroll()
  const [value, setValue] = useState(0)
  const preValue = useRef(0)
  const [visible, setVisiblle] = useState(false)

  useEffect(() => {
    const updateCounter = () => {
      const increment =
        Math.floor(Math.random() * 5) + 1
      const newValue =
        preValue.current + increment
      preValue.current = newValue
      if (newValue > LIMIT_LOADING) {
        setVisiblle(true)
      }
      setValue(
        newValue > LIMIT_LOADING
          ? LIMIT_LOADING
          : newValue
      )

      let delay =
        Math.floor(Math.random() * 0) +
        LIMIT_LOADING

      setTimeout(updateCounter, delay)
    }

    updateCounter()
  }, [])

  return (
    <div className='bg-black '>
      <motion.div
        initial={{ x: 0, scaleY: 1 }}
        animate={{
          opacity: value >= LIMIT_LOADING ? 0 : 1,
          scaleY: value >= LIMIT_LOADING ? 0 : 1,
          display:
            value >= LIMIT_LOADING
              ? 'none'
              : 'block',
        }}
        transition={{ duration: 0.1 }}
        className='fixed z-50 Benzin-Extra-Bold bottom-0 text-[9rem]'
      >
        {value}%
      </motion.div>

      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='fixed  z-20 top-0 left-0 right-0 bottom-0 bg-green-500 h-1 origin-left'
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: visible ? 1 : 0 }}
      >
        <div className='flex flex-col items-center'>
          <HomePage />
          <MyProject />
          <div className='lg:flex lg:items-center mt-20'>
            <div className='flex flex-col items-center '>
              <SuffleLetters
                text01={"Hy! I'm"}
                text02={'Sang'}
                imageName={'Atmosphere.jpg'}
              />

              <SangText />
            </div>

            <CV />
          </div>
          <Navigator />
        </div>
      </motion.div>
    </div>
  )
}

Home.getLayout = BasicLayout
