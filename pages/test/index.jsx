import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Index = () => {
  const [barWidth, setBarWidth] = useState('0px')
  return (
    <div className='p-24'>
      <motion.div className='flex flex-col justify-center items-center aease'>
        <motion.h1
          whileHover={() => {
            setBarWidth('200px')
          }}
          onMouseLeave={() => {
            setBarWidth('0px')
          }}
          className='text-[50px] text block cursor-pointer'
        >
          Sang
        </motion.h1>
        <motion.div
          animate={{
            width: barWidth,
            transition: {
              type: 'spring',
              duration: 1,
            },
          }}
          className='h-[10px] bg-red-400 '
        ></motion.div>
      </motion.div>
    </div>
  )
}

export default Index
